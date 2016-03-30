// Copyright 2016, EMC, Inc.

'use strict';

var di = require('di');
var util = require('util');
var ejs = require('ejs');

module.exports = swaggerFactory;

di.annotate(swaggerFactory, new di.Provide('Http.Services.Swagger'));
di.annotate(swaggerFactory,
    new di.Inject(
            'Promise',
            'Errors',
            '_',
            di.Injector,
            'Views',
            'Assert'
        )
    );

function swaggerFactory(
    Promise,
    Errors,
    _,
    injector,
    views,
    assert
) {
    function _processError(err) {
        if (!util.isError(err) && err instanceof Object) {
            var status = err.status;
            var message = (err instanceof Error) ? err : err.message;
            err = new Error(message);
            if (status) { err.status = status; }
        }
        return err;
    }

    function _parseQuery(req) {
        req.swagger.query = _(req.swagger.params)
        .pick(function(param) {
            if (param.parameterObject) {
                return param.parameterObject.in === 'query' &&
                       param.parameterObject.type === typeof(param.value);
            }
            return false;
        })
        .mapValues(function(param) {
            req.query = _(req.query).omit(param.parameterObject.definition.name).value();
            if (typeof(param.value) === 'string' && param.value.match(/\+/)) {
                return param.value.split(/\+/);
            }
            return param.value;
        }).value();
    }

    function swaggerController(options, callback) {
        if (typeof options === 'function') {
            callback = options;
            options = {};
        }
        return function(req, res, next) {
            req.swagger.options = options;
            return Promise.resolve().then(function() {
                _parseQuery(req);
                return callback(req, res);
            }).then(function(result) {
                if (!res.headersSent) {
                    res.body = result;
                    next();
                }
            }).catch(function(err) {
                next(_processError(err));
            });
        };
    }

    function swaggerDeserializer(injectableDeserializer) {
        var Deserializer = injector.get(injectableDeserializer);

        return function(req, res, next) {
            var deserializer = new Deserializer();
            return Promise.resolve().then(function() {
                if (req.method === 'PATCH') {
                    return deserializer.validatePartial(req.body);
                }
                return deserializer.validate(req.body);
            }).then(function(validated) {
                return deserializer.deserialize(validated);
            }).then(function(deserialized) {
                req.body = deserialized;
                next();
            }).catch(function(err) {
                next(_processError(err));
            });
        };
    }

    function swaggerSerializer(injectableSerializer) {
        var Serializer = injector.get(injectableSerializer);

        function serialize(data) {
            var serializer = new Serializer();
            return Promise.resolve().then(function() {
                return serializer.serialize(data);
            }).then(function(serialized) {
                return serializer.validateAsModel(serialized);
            }).then(function(validated) {
                return validated;
            });
        }

        return function(req, res, next) {
            var serialized;

            if (_.isArray(res.body)) {
                serialized = Promise.map(res.body, function(item) {
                    return serialize(item);
                });
            } else {
                serialized = serialize(res.body);
            }

            return serialized.then(function(validated) {
                res.body = validated;
                next();
            }).catch(function(err) {
                next(_processError(err));
            });
        };
    }

    function swaggerRenderer(req, res, viewName, next) {
        var status = req.swagger.options.success || 200;

        return Promise.resolve().then(function() {
            assert.ok(!res.headersSent);
            if (_.isEmpty(res.body) && req.swagger.options.send204OnEmpty) {
                status = 204;
            }
        })
        .then(function() {
            if (!viewName) {
                return res.body;
            }
            // Need to set content-type here
            // because render will resolve to a string.
            res.set('Content-Type', 'application/json');
            return views.render(viewName, res);
        })
        .then(function(data) {
            res.status(status).send(data);
        })
        .catch(function(err) {
            next(_processError(err));
        });
    }

    return {
        controller: swaggerController,
        deserializer: swaggerDeserializer,
        serializer: swaggerSerializer,
        renderer: swaggerRenderer
    };
}

'use strict';

var injector = require('../../../index').injector;
var serializer = injector.get('Http.Services.Swagger').serializer;
var deserializer = injector.get('Http.Services.Swagger').deserializer;

module.exports = {
    nodesGetAll: serializer('Serializables.V1.Node'),
    postNode: deserializer('Serializables.V1.Node'),
    getNodeById: serializer('Serializables.V1.Node'),
    patchNodeById: deserializer('Serializables.V1.Node'),
    getNodeObmById: serializer('Serializables.V1.Node'),
    postNodeObmById: deserializer('Serializables.V1.Node'),

    nodesPut: deserializer('Serializables.V1.Node'),
};


// Copyright 2016, EMC Inc.

'use strict';

var injector = require('../../../index.js').injector;
var controller = injector.get('Http.Services.Swagger').controller;
var files = injector.get('Http.Services.Api.Internal.Files');
var _ = injector.get('_'); //jshint ignore:line

var filesGetById = controller(function(req) {
    return files.get(req.params.identifier.value);

modules.export = {
    filesGetById: filesGetById;
};

// Copyright 2016, EMC Inc.

'use strict';

var injector = require('../../../index.js').injector;
var controller = injector.get('Http.Services.Swagger').controller;


var nodesGetAll = controller(function(req, res) {
    var nodes = injector.get('Http.Services.Api.Nodes');
    return nodes.getAllNodes(req.query);
});

var nodesPost = controller(function(req, res) {
    var nodes = injector.get('Http.Services.Api.Nodes');
    return nodes.postNode(req.body);
});


var nodesGetById = controller(function(req, res) {
    var nodes = injector.get('Http.Services.Api.Nodes');
    return nodes.getNodeById(req);
});

var nodesPatchById = controller(function(req, res) {
    var nodes = injector.get('Http.Services.Api.Nodes');
    return nodes.patchNodeById(req.params.identifier);
});

var nodesDelById = controller(function(req, res) {
    var nodes = injector.get('Http.Services.Api.Nodes');
    return nodes.delNodeById(req);
});

var nodesGetObmById = controller(function(req, res) {
    var nodes = injector.get('Http.Services.Api.Nodes');
    return nodes.getNodeObmById(req.params.identifier);
});

var nodesPostObmById = controller(function(req, res) {
    var nodes = injector.get('Http.Services.Api.Nodes');
    return nodes.postNodeObmById(req.params.identifier);
});

var nodesPostObmIdById = controller(function(req, res) {
    var nodes = injector.get('Http.Services.Api.Nodes');
    return nodes.postNodeObmIdById(req.params.identifier);
});

var nodesGetCatalogById = controller(function(req, res) {
    var nodes = injector.get('Http.Services.Api.Nodes');
    return nodes.getNodeCatalogById(req);
});

var nodesGetCatalogSourceById = controller(function(req, res) {
    var nodes = injector.get('Http.Services.Api.Nodes');
    return nodes.getNodeCatalogSourceById(req.params.identifier);
});

var nodesGetPollersById = controller(function(req, res) {
    var nodes = injector.get('Http.Services.Api.Nodes');
    return nodes.getPollersByNodeId(req);
});

var nodesGetWorkflowById = controller(function(req, res) {
    var nodes = injector.get('Http.Services.Api.Nodes');
    return nodes.getNodeWorkflowById(req);
});

var nodesPostWorkflowById = controller(function(req, res) {
    var nodes = injector.get('Http.Services.Api.Nodes');
    return nodes.setNodeWorkflow(req);
});

var nodesGetActiveWorkflowById = controller(function(req, res) {
    var nodes = injector.get('Http.Services.Api.Nodes');
    return nodes.getActiveNodeWorkflowById(req);
});

var nodesDelActiveWorkflowById = controller(function(req, res) {
    var nodes = injector.get('Http.Services.Api.Nodes');
    return nodes.delActiveWorkflowById(req);
});

module.exports = {
    nodesGetAll: nodesGetAll,
    nodesPost: nodesPost,
    nodesGetById: nodesGetById,
    nodesPatchById: nodesPatchById,
    nodesDelById: nodesDelById,
    nodesGetObmById: nodesGetObmById,
    nodesPostObmById: nodesPostObmById,
    nodesPostObmIdById: nodesPostObmIdById,
    nodesGetCatalogById: nodesGetCatalogById,
    nodesGetCatalogSourceById: nodesGetCatalogSourceById,
    nodesGetPollersById: nodesGetPollersById,
    nodesGetWorflowById: nodesGetWorkflowById,
    nodesPostWorkflowById: nodesPostWorkflowById,
    nodesGetActiveWorkflowById: nodesGetActiveWorkflowById,
    nodesDelActiveWorkflowById: nodesDelActiveWorkflowById
};
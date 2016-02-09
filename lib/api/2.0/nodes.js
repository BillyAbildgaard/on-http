// Copyright 2016, EMC Inc.

'use strict';

'use strict';

var injector = require('../../../index.js').injector;

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

function nodesGetAll(req, res) {
    var nodes = injector.get('Http.Services.Api.Nodes');
    res.json(nodes.getAllNodes());
}

function nodesPost(req, res) {
    var nodes = injector.get('Http.Services.Api.Nodes');
    res.json(nodes.postNode(req));
}

function nodesGetById(req, res) {
    var nodes = injector.get('Http.Services.Api.Nodes');
    res.json(nodes.getNodeById(req));
}

function nodesPatchById(req, res) {
    var nodes = injector.get('Http.Services.Api.Nodes');
    res.json(nodes.patchNodeById(req));
}

function nodesDelById(req, res) {
    var nodes = injector.get('Http.Services.Api.Nodes');
    res.json(nodes.delNodeById(req));
}

function nodesGetObmById(req, res) {
    var nodes = injector.get('Http.Services.Api.Nodes');
    res.json(nodes.getNodeObmById(req));
}

function nodesPostObmById(req, resp) {
    var nodes = injector.get('Http.Services.Api.Nodes');
    res.json(nodes.postNodeObmById(req));
}

function nodesPostObmIdById(req, res) {
    var nodes = injector.get('Http.Services.Api.Nodes');
    res.json(nodes.postNodeObmIdById(req));
}

function nodesGetCatalogById(req, res) {
    var nodes = injector.get('Http.Services.Api.Nodes');
    res.json(nodes.getNodeCatalogById(req));
}

function nodesGetCatalogSourceById(req, res) {
    var nodes = injector.get('Http.Services.Api.Nodes');
    res.json(nodes.getNodeCatalogSourceById(req));
}

function nodesGetPollersById(req, res) {
    var nodes = injector.get('Http.Services.Api.Nodes');
    res.json(nodes.getPollersByNodeId(req));
}

function nodesGetWorkflowById(req, res) {
    var nodes = injector.get('Http.Services.Api.Nodes');
    res.json(nodes.getNodeWorkflowById(req));
}

function nodesPostWorkflowById(req, res) {
    var nodes = injector.get('Http.Services.Api.Nodes');
    res.json(nodes.setNodeWorkflow(req));
}

function nodesGetActiveWorkflowById(req, res) {
    var nodes = injector.get('Http.Services.Api.Nodes');
    res.json(nodes.getActiveNodeWorkflowById(req));
}

function nodesDelActiveWorkflowById(req, res) {
    var nodes = injector.get('Http.Services.Api.Nodes');
<<<<<<< HEAD
    res.json(noes.getNodeWorkflowById(req));
}
=======
    res.json(nodes.delActiveWorkflowById(req));
}
>>>>>>> updated yaml file

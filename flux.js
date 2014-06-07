'use strict';

var _ = require('lodash');
var fluxxor = require('fluxxor');

var EditorStore = require('./flux/stores/editor');

var stores = {
  editor: new EditorStore()
};

var editorActions = require('./flux/actions/editor');

var actions = _.assign({}, editorActions);

var flux = new fluxxor.Flux(stores, actions);

module.exports = flux;

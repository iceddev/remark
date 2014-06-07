'use strict';

var _ = require('lodash');
var fluxxor = require('fluxxor');

var EditorStore = fluxxor.createStore({
  actions: {
    'UPDATE_TITLE': 'onTitleChange',
    'UPDATE_SLUG': 'onSlugChange',
    'UPDATE_VALUE': 'onValueChange'
  },

  initialize: function(){
    this.title = '';
    this.slug = '';
    this.value = '';
    this.syncSlug = true;
  },

  onTitleChange: function(payload){
    var changed = {};
    changed.title = this.title = payload;
    if(this.syncSlug){
      changed.slug = this.slug = _.kebabCase(this.title);
    }
    this.emit('change', changed);
  },

  onSlugChange: function(payload){
    this.slug = payload;
    this.syncSlug = false;
    this.emit('change', { slug: this.slug });
  },

  onValueChange: function(payload){
    this.value = payload;
    this.emit('change', { value: this.value });
  }
});

module.exports = EditorStore;

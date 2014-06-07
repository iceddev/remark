'use strict';

var editorActions = {
  updateTitle: function(title){
    this.dispatch('UPDATE_TITLE', title);
  },
  updateSlug: function(slug){
    this.dispatch('UPDATE_SLUG', slug);
  },
  updateValue: function(value){
    this.dispatch('UPDATE_VALUE', value);
  }
};

module.exports = editorActions;

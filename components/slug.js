'use strict';

var React = require('react');

var flux = require('../flux');

var SlugInput = React.createClass({

  onChange: function(e){
    flux.actions.updateSlug(e.target.value);
  },
  render: function(){
    return React.DOM.input({
      className: 'remark-slug',
      type: 'text',
      placeholder: 'Slug',
      value: this.props.value,
      onChange: this.onChange
    });
  }

});

module.exports = SlugInput;

'use strict';

var React = require('react');

var flux = require('../flux');

var TextArea = React.createClass({

  getDefaultProps: function(){
    return {
      value: ''
    };
  },
  onChange: function(e){
    flux.actions.updateValue(e.target.value);
  },
  render: function() {
    return (
      React.DOM.textarea({
        className: 'remark-editor',
        placeholder: 'Markdown',
        value: this.props.value,
        onChange: this.onChange
      })
    );
  }

});

module.exports = TextArea;

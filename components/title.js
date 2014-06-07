'use strict';

var React = require('react');

var flux = require('../flux');

var TitleInput = React.createClass({

  onChange: function(e){
    flux.actions.updateTitle(e.target.value);
  },
  render: function(){
    return React.DOM.input({
      className: 'remark-title',
      type: 'text',
      placeholder: 'Your Post Title',
      value: this.props.value,
      onChange: this.onChange
    });
  }

});

module.exports = TitleInput;

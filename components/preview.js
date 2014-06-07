'use strict';

var React = require('react');
var marked = require('marked');

var Preview = React.createClass({

  getDefaultProps: function(){
    return {
      value: ''
    };
  },
  render: function(){
    return React.DOM.div({
      className: 'remark-preview',
      dangerouslySetInnerHTML: { __html: marked(this.props.value) }
    });
  }

});

module.exports = Preview;

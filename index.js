'use strict';

var React = require('react');
var Remark = require('./component');

function renderComponent(element){
  return React.renderComponent(Remark(), element);
}

module.exports = renderComponent;

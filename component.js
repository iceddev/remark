'use strict';

var fs = require('fs');

var _ = require('lodash');
var React = require('react');
var insertCss = require('insert-css');

var styles = fs.readFileSync(__dirname + '/styles.css');

var Title = require('./components/title');
var Slug = require('./components/slug');
var Editor = require('./components/editor');
var Preview = require('./components/preview');

var flux = require('./flux');

var store = flux.store('editor');

var stylesInserted = false;

var Remark = React.createClass({

  getDefaultProps: function(){
    return {
      title: store.title,
      slug: store.slug,
      value: store.value
    };
  },

  componentDidMount: function(){
    if(!stylesInserted){
      insertCss(styles);
      stylesInserted = true;
    }
    store.on('change', _.bind(this.setProps, this));
  },

  render: function(){
    return React.DOM.div({ className: 'remark-container' },
      React.DOM.div({ className: 'remark-row' },
        Title({ value: this.props.title }),
        Slug({ value: this.props.slug })
      ),
      React.DOM.div({ className: 'remark-row'},
        Editor({ value: this.props.value }),
        Preview({ value: this.props.value })
      )
    );
  }

});

module.exports = Remark;

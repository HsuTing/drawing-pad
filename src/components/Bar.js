'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import radium from 'radium';

import style from './style/bar';

@radium
export default class Bar extends React.Component {
  static propTypes = {
    children: PropTypes.arrayOf(
      PropTypes.element
    ).isRequired
  }

  render() {
    return (
      <div style={style.bar}>
        {React.Children.map(this.props.children, node => (
          React.cloneElement(node, {
            ...this.props,
            style: style.button
          })
        ))}
      </div>
    );
  }
}

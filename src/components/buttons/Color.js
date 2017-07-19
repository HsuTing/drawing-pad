'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import radium from 'radium';
import {ChromePicker} from 'react-color';
import Menu from 'cat-components/lib/menu';
import black from 'cat-components/lib/color/black';

import * as style from './style/color';

@radium
export default class Color extends React.Component {
  static propTypes = {
    ctx: PropTypes.object,
    style: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      color: black
    };

    this.changeColor = this.changeColor.bind(this);
  }

  render() {
    const {color} = this.state;

    return (
      <div style={[this.props.style, style.root]}>
        <Menu menuStyle={() => style.menuStyle}
          menu={() => (
            <ChromePicker color={color}
              onChange={this.changeColor}
            />
          )}
        >
          <div style={style.color(color)} />
        </Menu>
      </div>
    );
  }

  changeColor({hex}) {
    const {ctx} = this.props;

    ctx.strokeStyle = hex;
    this.setState({color: hex});
  }
}

'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import radium from 'radium';
import EraserIcon from 'react-icons/lib/fa/eraser';
import PaintIcon from 'react-icons/lib/md/format-paint';
import white from 'cat-components/lib/color/white';

@radium
export default class Eraser extends React.Component {
  static propTypes = {
    ctx: PropTypes.object,
    canvas: PropTypes.object,
    style: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      erase: false,
      color: white
    };

    this.erase = this.erase.bind(this);
    this.paint = this.paint.bind(this);
  }

  componentDidUpdate() {
    const {ctx} = this.props;
    const {erase} = this.state;

    if(erase && ctx.strokeStyle.toLowerCase() !== white.toLowerCase()) {
      this.setState({erase: false});
    }
  }

  render() {
    const {style} = this.props;
    const {erase} = this.state;

    if(erase)
      return (
        <PaintIcon style={style}
          onClick={this.paint}
        />
      );

    return (
      <EraserIcon style={style}
        onClick={this.erase}
      />
    );
  }

  erase() {
    const {ctx} = this.props;
    const color = ctx.strokeStyle;

    ctx.strokeStyle = white;

    this.setState({
      erase: true,
      color
    });
  }

  paint() {
    const {ctx} = this.props;
    const {color} = this.state;

    ctx.strokeStyle = color;

    this.setState({erase: false});
  }
}

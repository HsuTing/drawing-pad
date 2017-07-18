'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import radium from 'radium';
import ClearIcon from 'react-icons/lib/md/delete';

@radium
export default class Clear extends React.Component {
  static propTypes = {
    ctx: PropTypes.object,
    canvas: PropTypes.object,
    style: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);
    this.clear = this.clear.bind(this);
  }

  render() {
    const {style} = this.props;

    return (
      <ClearIcon style={style}
        onClick={this.clear}
      />
    );
  }

  clear() {
    const {ctx, canvas} = this.props;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
}

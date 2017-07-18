'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import radium from 'radium';
import ImageIcon from 'react-icons/lib/md/image';

@radium
export default class Image extends React.Component {
  static propTypes = {
    canvas: PropTypes.object,
    style: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);
    this.save = this.save.bind(this);
  }

  render() {
    const {style} = this.props;

    return (
      <ImageIcon style={style}
        onClick={this.save}
      />
    );
  }

  save() {
    const {canvas} = this.props;
    const dataURL = canvas.toDataURL('image/png');
    const newWindow = window.open();

    newWindow.document.write(`<img src="${dataURL}" />`);
  }
}

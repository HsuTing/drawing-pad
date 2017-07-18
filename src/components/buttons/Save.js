'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import radium from 'radium';
import {saveAs} from 'file-saver';
import SaveIcon from 'react-icons/lib/md/file-download';

@radium
export default class Save extends React.Component {
  static propTypes = {
    canvas: PropTypes.object,
    style:PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);
    this.save = this.save.bind(this);
  }

  render() {
    const {style} = this.props;

    return (
      <SaveIcon style={style}
        onClick={this.save}
      />
    );
  }

  save() {
    const {canvas} = this.props;

    canvas.toBlob(blob => {
      saveAs(blob, 'image.png');
    });
  }
}

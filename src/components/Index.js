'use strict';

import React from 'react';
import radium from 'radium';
import Wrapper from 'cat-components/lib/wrapper';
import Canvas, {CanvasDraw} from 'cat-components/lib/canvas';

import Normalize from 'componentsShare/Normalize';

import Bar from './Bar';
import ColorButton from './buttons/Color';
import FontButton from './buttons/Font';
import EraserButton from './buttons/Eraser';
import ClearButton from './buttons/Clear';
import ImageButton from './buttons/Image';
import SaveButton from './buttons/Save';
import * as style from './style/index';

@radium
class Index extends React.Component {
  render() {
    return (
      <CanvasDraw>
        <Canvas style={style.pad}
          rootStyle={style.rootStyle}
          setting={this.setting}
          checkSupport={this.checkSupport}
        >
          <Normalize />

          <Bar>
            <ColorButton />
            <FontButton />
            <EraserButton />
            <ClearButton />
            <ImageButton />
            <SaveButton />
          </Bar>
        </Canvas>
      </CanvasDraw>
    );
  }

  checkSupport() {
    alert('Not support.');
  }

  setting({canvas, ctx}) {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
  }
}

/* eslint-disable react/display-name, react/prop-types */
export default ({radiumConfig, ...props}) => (
  <Wrapper radiumConfig={radiumConfig}>
    <Index {...props} />
  </Wrapper>
);
/* eslint-enable react/display-name, react/prop-types */

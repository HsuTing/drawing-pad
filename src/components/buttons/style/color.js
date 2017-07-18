'use strict';

import white from 'cat-components/lib/color/white';

export default {
  root: {
    margin: '0px 5px',
    width: 'initial',
    height: 'initial',
    background: white,
    borderRadius: '5px'
  },

  menuStyle: {
    top: '35px',
    left: '-5px',
    broder: '0px',
    padding: '0px',
    width: 'initial',
    height: 'initial'
  },

  color: color => ({
    width: '25px',
    height: '10px',
    background: color
  })
};

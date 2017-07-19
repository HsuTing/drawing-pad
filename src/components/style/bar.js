'use strict';

import white from 'cat-components/lib/color/white';
import black from 'cat-components/lib/color/black';

export const bar = {
  position: 'fixed',
  top: '0px',
  left: '0px',
  width: 'calc(100% - 10px * 2)',
  padding: '0px 10px',
  color: white,
  background: black,
  boxShadow: `${black} 0px 0px 20px`
};

export const button = {
  display: 'inline-block',
  verticalAlign: 'middle',
  width: '25px',
  height: '25px',
  lineHeight: '25px',
  padding: '5px',
  cursor: 'pointer'
};

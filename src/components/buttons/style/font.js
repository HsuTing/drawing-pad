'use strict';

export const root = {
  margin: '0px 5px',
  width: 'initial',
  height: 'initial'
};

export const input = {
  display: 'inline-block',
  verticalAlign: 'middle',
  margin: '0px',
  padding: '2px 5px',
  width: 'calc(24px - 2px * 2)',
  height: 'calc(20px - 2px * 2)',
  lineHeight: 'calc(20px - 2px * 2)',
  fontSize: '15px',
  textAlign: 'center',
  borderRadius: '5px'
};

export const icon = type => ({
  margin: type === 'add' ? '0px 0px 0px 2px' : '0px 2px 0px 0px',
  userSelect: 'none'
});

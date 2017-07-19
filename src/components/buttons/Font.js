'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import radium from 'radium';
import AddIcon from 'react-icons/lib/md/add';
import SubIcon from 'react-icons/lib/md/remove';
import Input from 'cat-components/lib/input';

import * as style from './style/font';

@radium
export default class Font extends React.Component {
  static propTypes = {
    ctx: PropTypes.object,
    style: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      fontSize: '1'
    };

    this.onChange = this.onChange.bind(this);
    this.add = this.count('add').bind(this);
    this.sub = this.count('sub').bind(this);
  }

  componentDidUpdate() {
    const {ctx} = this.props;
    const {fontSize} = this.state;
    ctx.lineWidth = fontSize;
  }

  render() {
    const {fontSize} = this.state;

    return (
      <div style={[this.props.style, style.root]}>
        <SubIcon style={style.icon('sub')}
          onClick={this.sub}
        />

        <Input style={style.input}
          value={fontSize}
          onChange={this.onChange}
          rules={[{
            validator: 'isInt',
            not: true,
            message: 'Is not int',
            options: {
              min: 1
            }
          }]}
          maxLength={2}
        />

        <AddIcon style={style.icon('add')}
          onClick={this.add}
        />
      </div>
    );
  }

  onChange({value, error, isError}) {
    if(isError && value !== '')
      return;

    this.setState({fontSize: value});
  }

  count(type) {
    return () => {
      const {fontSize} = this.state;
      const newFontSize = fontSize * 1 + (type === 'add' ? 1 : -1);

      if(newFontSize < 100 && newFontSize > 0)
        this.setState({fontSize: newFontSize.toString()});
    }
  }
}

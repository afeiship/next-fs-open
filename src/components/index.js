import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';
import { Popconfirm } from 'antd';
const CLASS_NAME = 'react-ant-pop-confirm';

export default class extends Component {
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.any,
    label: PropTypes.any
  };

  static defaultProps = {
    title: '确认执行此操作?'
  };
  /*===properties end===*/

  render() {
    const { className, children, ...props } = this.props;
    return (
      <Popconfirm className={classNames(CLASS_NAME, className)} {...props}>
        <a>{children}</a>
      </Popconfirm>
    );
  }
}

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const defaultProps = {};
const propTypes = {
  type: PropTypes.any,
  name: PropTypes.any,
  value: PropTypes.any,
  checked: PropTypes.bool,
  defaultChecked: PropTypes.any
};

const CheckBox = ({ type, name, value, checked, defaultChecked }) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      checked={checked}
      defaultChecked={defaultChecked}
    />
  );
};

CheckBox.defaultProps = defaultProps;
CheckBox.propTypes = propTypes;

export default CheckBox;

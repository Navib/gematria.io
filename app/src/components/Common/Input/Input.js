import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './Input.scss';

const defaultProps = {
  value: ''
};

const propTypes = {
  value: PropTypes.any,
  type: PropTypes.any,
  className: PropTypes.any
};

const Input = field => (
  <div className={classnames(styles.inputFieldRow)}>
    <input
      {...field.input}
      type="text"
      className={classnames(styles.inputFieldText)}
    />
    {field.meta.touched &&
      field.meta.error && <span className="error">{field.meta.error}</span>}
  </div>
);

Input.defaultProps = defaultProps;
Input.propTypes = propTypes;

export default Input;

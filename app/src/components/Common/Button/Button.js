import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './Button.scss';

const defaultProps = {
  className: '',
  type: 'button',
  name: 'button'
};

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  name: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func
};

const Button = ({ children, className, type, name, onClick }) => {
  return (
    <button
      className={classnames(styles.button, className)}
      type={type}
      name={name}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.defaultProps = defaultProps;
Button.propTypes = propTypes;

export default Button;

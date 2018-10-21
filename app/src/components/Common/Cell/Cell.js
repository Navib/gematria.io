import React from 'react';
import PropTypes from 'prop-types';

const defaultProps = {};

const propTypes = {
  children: PropTypes.any,
  className: PropTypes.string
};

const Cell = ({ children, className }) => {
  return <div className={`cell ${className}`}>{children}</div>;
};

Cell.propTypes = propTypes;
Cell.defaultProps = defaultProps;

export default Cell;

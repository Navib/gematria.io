import React from 'react';
import PropTypes from 'prop-types';

const defaultProps = {};

const propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  style: PropTypes.any
};

const Cell = ({ children, className, style }) => {
  return (
    <div className={`cell ${className}`} style={style}>
      {children}
    </div>
  );
};

Cell.propTypes = propTypes;
Cell.defaultProps = defaultProps;

export default Cell;

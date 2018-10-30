import React from 'react';
import PropTypes from 'prop-types';

const defaultProps = {};

const propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func
};

const Cell = ({ children, className, style, onClick }) => {
  return (
    <div className={`cell ${className}`} style={style} onClick={onClick}>
      {children}
    </div>
  );
};

Cell.propTypes = propTypes;
Cell.defaultProps = defaultProps;

export default Cell;

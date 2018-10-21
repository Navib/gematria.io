import React from 'react';
import PropTypes from 'prop-types';

const defaultProps = {
  className: ''
};

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.any
};

const GridX = ({ children, className }) => {
  return <div className={`grid-x ${className}`}>{children}</div>;
};

GridX.defaultProps = defaultProps;
GridX.propTypes = propTypes;

export default GridX;

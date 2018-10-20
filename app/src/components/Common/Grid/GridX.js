import React from 'react';
import PropTypes from 'prop-types';

const defaultProps = {
  className: '',
  gutters: false
};

const propTypes = {
  className: PropTypes.string,
  gutters: PropTypes.bool,
  children: PropTypes.any
};

const GridX = ({ children, gutters, className }) => {
  return <div className={`grid-x ${className}`}>{children}</div>;
};

GridX.defaultProps = defaultProps;
GridX.propTypes = propTypes;

export default GridX;

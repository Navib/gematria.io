import React from 'react';
import PropTypes from 'prop-types';

const defaultProps = {
  className: ''
};

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.any
};

const GridContainer = ({ className, children }) => {
  return <div className={`grid-container ${className}`}>{children}</div>;
};

GridContainer.defaultProps = defaultProps;
GridContainer.propTypes = propTypes;

export default GridContainer;

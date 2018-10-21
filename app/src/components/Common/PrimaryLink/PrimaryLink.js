import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './PrimaryLink.scss';

const defaultProps = {
  className: '',
  to: '',
  role: 'btn'
};

const propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  to: PropTypes.any
};

const PrimaryLink = ({ className, children, to, role }) => {
  return (
    <Link to={to} className={`${role}-anchorRouteTag ${className}`}>
      {children}
    </Link>
  );
};

PrimaryLink.defaultProps = defaultProps;
PrimaryLink.propTypes = propTypes;

export default PrimaryLink;

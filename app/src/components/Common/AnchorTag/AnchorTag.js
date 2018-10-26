import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './AnchorTag.scss';

const defaultProps = {
  className: '',
  href: '',
  role: 'btn'
};

const propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  href: PropTypes.any
};

const AnchorTag = ({ className, children, href, role }) => {
  return (
    <a href={href} className={`${role}-anchorTag ${className}`}>
      {children}
    </a>
  );
};

AnchorTag.defaultProps = defaultProps;
AnchorTag.propTypes = propTypes;

export default AnchorTag;

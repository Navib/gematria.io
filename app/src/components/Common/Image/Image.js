import React from 'react';
import PropTypes from 'prop-types';
import styles from './Image.scss';

const defaultProps = {
  src: '//via.placeholder.com/300.png/09f/fff',
  className: '',
  alt: 'image description'
};

const propTypes = {
  src: PropTypes.string,
  className: PropTypes.string,
  alt: PropTypes.string
};

const style = (width, height) => {
  return {
    width: width,
    height: height
  };
};

const Image = ({ className, src, alt, width, height }) => {
  return (
    <img
      src={src}
      className={`${styles.responsiveImage} ${className}`}
      alt={alt}
      style={style(width, height)}
    />
  );
};

Image.defaultProps = defaultProps;
Image.propTypes = propTypes;

export default Image;

import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';

export default ({ children, history }) => {
  return (
    <div>
      <Header />
      <div>{children}</div>
    </div>
  );
};

import React from 'react';
import PropTypes from 'prop-types';
import GridX from '../Common/Grid';
import Cell from '../Common/Cell';

const defaultProps = {
  title: 'Website Title',
  logo: 'img/svg'
};

const propTypes = {
  title: PropTypes.any,
  logo: PropTypes.any
};

const Header = ({ title, logo }) => {
  return (
    <header>
      <GridX gutters={false}>
        <Cell className="cell medium-6 large-4">12/6/4 cells</Cell>
        <Cell className="cell medium-6 large-4">12/6/8 cells</Cell>
        <Cell className="cell medium-6 large-4">12/6/8 cells</Cell>
      </GridX>
    </header>
  );
};

Header.defaultProps = defaultProps;
Header.propTypes = propTypes;

export default Header;

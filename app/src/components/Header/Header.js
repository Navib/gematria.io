import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import GridContainer from '../Common/GridContainer';
import GridX from '../Common/GridX';
import Cell from '../Common/Cell';
import PrimaryLink from '../Common/PrimaryLink';
import styles from './Header.scss';

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
    <header className={classnames(styles.headerContainer)}>
      <GridContainer>
        <GridX>
          <Cell className="medium-6 large-4">12/6/4 cells</Cell>
          <Cell className="medium-6 large-4">12/6/8 cells</Cell>
          <Cell className="medium-6 large-4">
            12/6/8 cells
            <PrimaryLink to="/calculator" role="btn">
              Route Link
            </PrimaryLink>
            <PrimaryLink to="/calculator" role="link">
              Route Link
            </PrimaryLink>
          </Cell>
        </GridX>
      </GridContainer>
    </header>
  );
};

Header.defaultProps = defaultProps;
Header.propTypes = propTypes;

export default Header;

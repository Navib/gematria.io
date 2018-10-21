import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import GridContainer from '../Common/GridContainer';
import GridX from '../Common/GridX';
import HeaderLinkList from './HeaderLinkList';
import styles from './Header.scss';
import newProps from './HeaderLinkList/props';

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
      <GridX>
        <HeaderLinkList links={newProps.links} />
      </GridX>
    </header>
  );
};

Header.defaultProps = defaultProps;
Header.propTypes = propTypes;

export default Header;

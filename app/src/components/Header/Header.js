import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import GridContainer from '../Common/GridContainer';
import GridX from '../Common/GridX';
import HeaderLinkList from './HeaderLinkList';
import styles from './Header.scss';

const defaultProps = {
  title: 'Website Title',
  logo: 'img/svg'
};

const propTypes = {
  title: PropTypes.any,
  logo: PropTypes.any,
  links: PropTypes.array
};

class Header extends Component {
  componentDidMount() {
    const { links } = this.props;
    if (!links) this.props.getNavigation();
  }

  render() {
    if (!this.props.links) return <div />;
    return (
      <header className={classnames(styles.headerContainer)}>
        <GridX>
          <HeaderLinkList links={this.props.links} />
        </GridX>
      </header>
    );
  }
}

Header.defaultProps = defaultProps;
Header.propTypes = propTypes;

export default Header;

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Cell from '../../Common/Cell';
import AnchorTag from '../../Common/AnchorTag';
import PrimaryLink from '../../Common/PrimaryLink';
import styles from './HeaderLinkList.scss';

const defaultProps = {
  auth: false
};

const propTypes = {
  links: PropTypes.array,
  className: PropTypes.any,
  auth: PropTypes.bool
};

const renderLinks = (linkObj, styles, className) => {
  return linkObj.map((link, indx, style) => {
    return (
      <li
        key={`headerLink-${indx}`}
        className={classnames(styles.headerListItem, className)}
      >
        <AnchorTag role="link" href={link.href}>
          {link.name}
        </AnchorTag>
      </li>
    );
  });
};
const renderLogin = auth => {
  if (!auth) {
    return (
      <li>
        <PrimaryLink to="/signup" role="link">
          Sign up
        </PrimaryLink>
      </li>
    );
  }
  return (
    <li>
      <PrimaryLink to="/myaccount" role="link">
        My Account
      </PrimaryLink>
    </li>
  );
};

const HeaderLinkList = ({ className, links, auth }) => {
  return (
    <Fragment>
      <Cell className="large-3 medium-3 small-6">
        <ul className={classnames(styles.headerLinksList, className)}>
          {renderLinks(links, styles, 'items')}
        </ul>
      </Cell>
      <Cell className="large-3 medium-3 small-6 large-offset-6 medium-offset-6">
        <ul className={classnames(styles.headerLinksAuthBar, className)}>
          {renderLogin(auth)}
        </ul>
      </Cell>
    </Fragment>
  );
};

HeaderLinkList.defaultProps = defaultProps;
HeaderLinkList.propTypes = propTypes;

export default HeaderLinkList;

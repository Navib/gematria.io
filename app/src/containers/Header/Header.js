import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TheComponent from '../../components/Header';
import actions, { GET_NAVIGATION } from './';

const mapStateToProps = (state, ownProps) => {
  return { links: state.header.headers.headerLinks };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getNavigation: () => {
      dispatch({ type: GET_NAVIGATION });
    }
  };
};
const Header = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(TheComponent)
);

export default Header;

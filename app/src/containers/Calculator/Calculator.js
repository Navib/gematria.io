import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { reset } from 'redux-form';
import TheComponent from '../../components/Calculator/Calculator';

const mapStateToProps = (state, ownProps) => {
  return {
    currentSearch: state.searchTerm.currentSearch
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};

const Calculator = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(TheComponent)
);

export default Calculator;

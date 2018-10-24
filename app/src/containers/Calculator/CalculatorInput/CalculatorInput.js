import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { reset } from 'redux-form';
import TheComponent from '../../../components/Calculator/CalculatorInput';
import actions, { GET_CHARACTER_EVENT, SEND_SEARCH_TERM } from './';

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    querySearchTerm: string => {
      dispatch({ type: GET_CHARACTER_EVENT, payload: string });
    },
    submitSearchTerm: string => {
      dispatch({ type: SEND_SEARCH_TERM, payload: string });
    },
    onSuccesfulSubmit: () => {
      dispatch(reset('searchTerm'));
    }
  };
};

const CalculatorInput = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(TheComponent)
);

export default CalculatorInput;

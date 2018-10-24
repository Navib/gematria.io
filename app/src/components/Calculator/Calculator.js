import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GridContainer from '../Common/GridContainer';
import GridX from '../Common/GridX';
import Cell from '../Common/Cell';
import CalculatorInput from '../../containers/Calculator/CalculatorInput';

class Calculator extends Component {
  render() {
    return (
      <GridContainer>
        <GridX>
          <Cell className="large-12 medium-12 small-12">
            Calculator Wrapper
            <CalculatorInput />
          </Cell>
        </GridX>
      </GridContainer>
    );
  }
}

export default Calculator;

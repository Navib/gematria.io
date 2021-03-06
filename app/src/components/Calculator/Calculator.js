import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GridContainer from '../Common/GridContainer';
import GridX from '../Common/GridX';
import Cell from '../Common/Cell';
import CalculatorInput from '../../containers/Calculator/CalculatorInput';
import CalculatorBox from './CalculatorBox';
import CalculatorFilter from './CalculatorFilter';
import Term from './Term';
import SlideOut from '../Common/SlideOut';

import CIPHERS from '../../constants/ciphers';

const defaultProps = {
  label: 'Gematria.io'
};

const propTypes = {
  currentSearch: PropTypes.string
};

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeCiphers: CIPHERS.slice(0, 4)
    };
    this.selectFilters = this.selectFilters.bind(this);
    this.remove = this.remove.bind(this);
  }
  componentDidMount() {}
  componentDidUpdate() {}

  remove(array, element) {
    return array.filter(e => e !== element);
  }

  selectFilters(value, checked) {
    const addRule = CIPHERS.find(obj => obj.id === value);
    const activeCiphers = this.state.activeCiphers;

    if (checked) {
      this.setState({
        activeCiphers: [...activeCiphers, addRule]
      });
    } else {
      this.setState({
        activeCiphers: this.remove(activeCiphers, addRule)
      });
    }
  }

  render() {
    return (
      <GridContainer>
        <GridX>
          <Cell className="large-12 medium-12 small-12">
            <h1 style={{ fontSize: '4rem', marginBottom: '2.2rem' }}>
              {this.props.label}
            </h1>
          </Cell>
          <Cell className="large-12 medium-12 small-12">
            <SlideOut>
              <CalculatorFilter
                ciphers={CIPHERS}
                onChange={this.selectFilters}
              />
            </SlideOut>
            <CalculatorInput />
            <Term term={this.props.currentSearch} />
            <CalculatorBox
              currentSearch={this.props.currentSearch}
              activeCiphers={this.state.activeCiphers}
            />
          </Cell>
        </GridX>
      </GridContainer>
    );
  }
}

Calculator.defaultProps = defaultProps;
Calculator.propTypes = propTypes;

export default Calculator;

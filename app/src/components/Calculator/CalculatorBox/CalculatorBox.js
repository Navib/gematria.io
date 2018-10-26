import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import GridX from '../../Common/GridX';
import styles from './CalculatorBox.scss';
import Conversion from '../Conversion';
import {
  englishOrdinal,
  fullReduction,
  reverseFullReduction
} from '../../../utilities/ciphers';
import LETTERS from '../../../constants/letters';

const defaultProps = {};

const propTypes = {
  searchTerms: PropTypes.array,
  currentSearch: PropTypes.string,
  activeCiphers: PropTypes.array
};

class CalculatorBox extends Component {
  constructor(props) {
    super(props);

    this.selectConversion = this.selectConversion.bind(this);
  }

  selectConversion(conversionId, currentSearch) {
    if (currentSearch === undefined || currentSearch === '') return false;
    const findConversion = this.props.activeCiphers.find(
      obj => obj.id === conversionId
    );
    console.log(findConversion.id);
    switch (findConversion.id) {
      case 'EO':
        return englishOrdinal(currentSearch, LETTERS);
      case 'EFR':
        return fullReduction(currentSearch, LETTERS);
      case 'RFR':
        return reverseFullReduction(currentSearch, LETTERS);
      default:
        return 'test';
    }
  }

  renderConversion() {
    const { currentSearch, activeCiphers } = this.props;
    return activeCiphers.map(cipher => {
      return (
        <Conversion
          key={cipher.id}
          currentSearch={currentSearch}
          conversion={this.selectConversion(cipher.id, currentSearch)}
          title={cipher.name}
        />
      );
    });
  }
  render() {
    return (
      <GridX className={classnames(styles.calculatorBox)}>
        {this.renderConversion()}
      </GridX>
    );
  }
}

CalculatorBox.defaultProps = defaultProps;
CalculatorBox.propTypes = propTypes;

export default CalculatorBox;

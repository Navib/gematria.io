import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import GridX from '../../Common/GridX';
import styles from './CalculatorBox.scss';
import Conversion from '../Conversion';
import {
  englishOrdinal,
  reverseOrdinal,
  fullReduction,
  reverseFullReduction,
  singleReduction,
  englishExtended
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

  selectConversion(conversionId, currentSearch, alphabet) {
    if (currentSearch === undefined || currentSearch === '') return 0;

    switch (conversionId) {
      case 'EO':
        return englishOrdinal(currentSearch, alphabet);
      case 'EFR':
        return fullReduction(currentSearch, alphabet);
      case 'RFR':
        return reverseFullReduction(currentSearch, alphabet);
      case 'RO':
        return reverseOrdinal(currentSearch, alphabet);
      case 'ESR':
        return singleReduction(currentSearch, alphabet);
      case 'EE':
        return englishExtended(currentSearch, alphabet);
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
          conversion={this.selectConversion(cipher.id, currentSearch, LETTERS)}
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

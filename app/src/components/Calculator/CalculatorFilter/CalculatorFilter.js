import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Cell from '../../Common/Cell';
import GridX from '../../Common/GridX';
import Button from '../../Common/Button';
import CheckBox from '../../Common/CheckBox';
import styles from './CalculatorFilter.scss';

const defaultProps = {};

const propTypes = {
  ciphers: PropTypes.array,
  onChange: PropTypes.any
};

class CalculatorFilter extends Component {
  componentDidMount() {}

  renderFilters() {
    return this.props.ciphers.map((cipher, i) => {
      return (
        <div
          key={cipher.id}
          className={classnames(styles.checkBoxSquare, 'medium-6 small-12')}
        >
          <CheckBox
            name={cipher.id}
            type="checkbox"
            value={cipher.id}
            defaultChecked={i > 3 ? false : true}
          />
          <span>{cipher.name}</span>
        </div>
      );
    });
  }
  render() {
    return (
      <Cell
        className={classnames(
          styles.calculatorFilterWrapper,
          'large-12 medium-12 small-12'
        )}
      >
        <form
          onChange={e => this.props.onChange(e.target.value, e.target.checked)}
        >
          <GridX>{this.renderFilters()}</GridX>
        </form>
      </Cell>
    );
  }
}

CalculatorFilter.defaultProps = defaultProps;
CalculatorFilter.propTypes = propTypes;

export default CalculatorFilter;

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Cell from '../../Common/Cell';
import Button from '../../Common/Button';
import CheckBox from '../../Common/CheckBox';
import styles from './CalculatorFilter.scss';

const defaultProps = {};

const propTypes = {
  ciphers: PropTypes.array,
  onChange: PropTypes.any
};

class CalculatorFilter extends Component {
  componentDidMount() {
    console.log(this.props);
  }

  renderFilters() {
    return this.props.ciphers.map((cipher, i) => {
      return (
        <Fragment key={cipher.id}>
          <CheckBox
            name={cipher.id}
            type="checkbox"
            value={cipher.id}
            defaultChecked={i > 3 ? false : true}
          />
          <span>{cipher.name}</span>
        </Fragment>
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
          {this.renderFilters()}
        </form>
      </Cell>
    );
  }
}

CalculatorFilter.defaultProps = defaultProps;
CalculatorFilter.propTypes = propTypes;

export default CalculatorFilter;

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Cell from '../../Common/Cell';
import styles from './Conversion.scss';

const defaultProps = {};
const propTypes = {
  title: PropTypes.string,
  currentSearch: PropTypes.any,
  conversion: PropTypes.any
};

const Conversion = ({ title, currentSearch, conversion }) => {
  return (
    <Cell
      className={classnames(
        styles.conversionWrapper,
        'large-3 medium-6 small-12'
      )}
    >
      <div className={classnames(styles.conversionCard)}>
        <h3 className={classnames(styles.conversionTitle)}>{title}</h3>
        <div className={classnames(styles.conversionInt)}>{currentSearch}</div>
        <p className={classnames(styles.conversionInt)}>{conversion}</p>
      </div>
    </Cell>
  );
};

Conversion.defaultProps = defaultProps;
Conversion.propTypes = propTypes;

export default Conversion;

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './Term.scss';
import Cell from '../../Common/Cell';

const defaultProps = {};
const propTypes = {
  term: PropTypes.string
};

const Term = ({ term }) => {
  return (
    <Cell
      className={classnames(styles.termWrapper, 'large-12 medium-12 small-12')}
    >
      <p>{term}</p>
    </Cell>
  );
};

Term.defaultProps = defaultProps;
Term.propTypes = propTypes;

export default Term;

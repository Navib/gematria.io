import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './SlideOut.scss';
import Cell from '../Cell';

const defaultProps = {
  number: '400px'
};

const propTypes = {
  children: PropTypes.any,
  width: PropTypes.number
};

class SlideOut extends Component {
  constructor(props) {
    super(props);

    this.state = {
      width: '0px',
      open: false
    };

    this.onClick = this.onClick.bind(this);
  }
  onClick() {
    if (!this.state.open) {
      document.body.style.overflow = 'hidden';
      this.setState({
        open: true,
        width: '400px'
      });
    } else {
      document.body.style.overflow = 'auto';
      this.setState({
        open: false,
        width: '0px'
      });
    }
  }
  render() {
    const { children, number } = this.props;
    return (
      <React.Fragment>
        <Cell
          className={classnames(styles.noScrollWrapper)}
          style={{ width: this.state.width === '400px' ? '100%' : '0px' }}
        />
        <Cell
          className={classnames(styles.slideOutWrapper)}
          style={{ width: this.state.width }}
        >
          <div
            className={classnames(styles.tab)}
            onClick={() => this.onClick()}
          />
          <div
            className={styles.slideOutBody}
            style={{ display: this.state.open ? 'block' : 'none' }}
          >
            {children}
          </div>
        </Cell>
      </React.Fragment>
    );
  }
}

SlideOut.defaultProps = defaultProps;
SlideOut.propTypes = propTypes;

export default SlideOut;

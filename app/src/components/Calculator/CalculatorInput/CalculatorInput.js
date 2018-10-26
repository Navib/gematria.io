import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import classnames from 'classnames';
import styles from './CalculatorInput.scss';
import Button from '../../Common/Button';
import GridX from '../../Common/GridX';
import Cell from '../../Common/Cell';
import Input from '../../Common/Input/Input';

class CalculatorInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ''
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  componentDidMount() {}

  onSubmit(term) {
    this.props.submitSearchTerm(term.term);
    this.props.onSuccesfulSubmit();
  }

  handleOnChange(e) {
    this.props.querySearchTerm(e.target.value);
    this.setState({
      term: e.target.value
    });
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <GridX>
        <form
          className={
            (classnames(styles.calcInputForm),
            'large-10 medium-10 small-10 large-offset-1 medium-offset-1 small-offset-1')
          }
          onSubmit={handleSubmit(this.onSubmit)}
        >
          <label>Search</label>
          <Cell className={classnames(styles.noFieldBorder)}>
            <Field
              name="term"
              type="text"
              autoComplete="none"
              required
              className={classnames(styles.calcInputText)}
              component={Input}
              onChange={this.handleOnChange}
            />
            <Button type="submit" className={classnames(styles.searchBarBtn)}>
              Search
            </Button>
          </Cell>
          <div>{this.props.errorMessage}</div>
        </form>
      </GridX>
    );
  }
}

export default reduxForm({ form: 'searchTerm' })(CalculatorInput);

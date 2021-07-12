import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate'; // eslint-disable-line no-unused-vars

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(btnName) {
    const calculator = calculate(this.state, btnName);
    this.setState({ ...calculator });
  }

  render() {
    const { next, total } = this.state;
    const result = next ? next && next.toString() : total && total.toString();
    return (
      <>
        <Display result={result || '0'} />
        <ButtonPanel clickHandler={this.handleClick} />
      </>
    );
  }
}

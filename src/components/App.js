import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (buttonName) => {
    const { total, next, operation } = this.state;
    const calculateDataObject = { total, next, operation };
    const result = calculate(calculateDataObject, buttonName);
    this.setState(
      {
        total: result.total,
        next: result.next,
        operation: result.operation,
      },
    );
  }

  render() {
    const { total } = this.state;
    return (
      <>
        <Display result={total} />
        <ButtonPanel />
      </>
    );
  }
}

export default App;

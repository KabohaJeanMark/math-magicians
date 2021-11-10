import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';
import '../styles/App.css';

const App = () => {
  const [total, setTotal] = useState('');
  const [next, setNext] = useState('');
  const [operation, setOperation] = useState('');

  const handleClick = (buttonName) => {
    const calculateDataObject = { total, next, operation };
    const result = calculate(calculateDataObject, buttonName);
    setTotal(result.total);
    setNext(result.next);
    setOperation(result.operation);
  };

  return (
    <div className="App">
      <Display result={total} />
      <ButtonPanel clickHandler={handleClick} />
    </div>
  );
};

export default App;

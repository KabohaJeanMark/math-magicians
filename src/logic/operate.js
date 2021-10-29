import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  let total;
  const num1 = new Big(numberOne);
  const num2 = new Big(numberTwo);
  if (operation === '-') {
    total = num1.sub(num2);
  } else if (operation === '+') {
    total = num1.add(num2);
  } else if (operation === '*') {
    total = num1.times(num2);
  } else {
    total = num1.div(num2);
  }
  return total;
};

export default operate;

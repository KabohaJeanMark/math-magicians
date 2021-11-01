import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  let total;
  const myNum1 = Number(numberOne);
  const myNum2 = Number(numberTwo);
  const num1 = new Big(myNum1);
  const num2 = new Big(myNum2);
  if (operation === '-') {
    total = num1.sub(num2);
  } else if (operation === '+') {
    total = num1.add(num2);
  } else if (operation === 'X') {
    total = num1.times(num2);
  } else if (operation === '÷') {
    total = num1.div(num2);
  }
  return total;
};

export default operate;

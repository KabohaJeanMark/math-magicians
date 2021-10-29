import Big from 'big.js';

function operate(numberOne, numberTwo, operation) {
  let total;
  if (operation === '-') {
    total = Big(numberOne) - Big(numberTwo);
  } else if (operation === '+') {
    total = Big(numberOne) + Big(numberTwo);
  } else if (operation === '*') {
    total = Big(numberOne) * Big(numberTwo);
  } else if (operation === '/') {
    total = Big(numberOne) / Big(numberTwo);
  } else {
    total = Big(numberOne) / 100;
  }
  return total;
}

export default operate;

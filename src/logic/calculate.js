import operate from './operate';

function calculate(calculatorDataObject, buttonName) {
  let { total, next, operation } = calculatorDataObject;

  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];

  const operators = ['+', '-', 'X', '/'];

  if (buttonName === 'AC') {
    total = ' ';
    next = ' ';
    operation = ' ';
  } else if (numbers.includes(buttonName) && operation === '') {
    total += buttonName;
  } else if (operators.includes(buttonName)) {
    operation = buttonName;
    next = total;
    total = '';
  } else if (buttonName === '+/-') {
    total *= -1;
  } else if (buttonName === '%') {
    total /= 100;
  } else if (buttonName === '=') {
    total = operate(total, next, operation);
    next = '';
    operation = '';
  }
  return { total, next, operation };
}

export default calculate;

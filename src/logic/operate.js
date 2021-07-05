import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const bigOne = Big(numberOne);
  const bigTwo = Big(numberTwo);
  if (operation == '+') {
    return Big(bigOne + bigTwo);
  }
  if (operation == '-') {
    return Big(bigOne - bigTwo);
  }
  if (operation == '*') {
    return Big(bigOne * bigTwo);
  }
  if (operation == '÷') {
    return Big(bigOne / bigTwo);
  }
  if (operation == '%') {
    return Big((bigOne * 100) / bigTwo);
  }
};

export default operate;

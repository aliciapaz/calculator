import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  let result = new Big();
  const bigOne = Big(numberOne);
  const bigTwo = Big(numberTwo);
  if (operation === '+') {
    result = Big(bigOne + bigTwo);
  }
  if (operation === '-') {
    result = Big(bigOne - bigTwo);
  }
  if (operation === 'X') {
    result = Big(bigOne * bigTwo);
  }
  if (operation === '÷') {
    result = Big(bigOne / bigTwo);
  }
  if (operation === '%') {
    result = Big((bigOne * 100) / bigTwo);
  }
  return result;
};

export default operate;

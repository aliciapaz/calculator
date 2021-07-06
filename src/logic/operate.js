import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  let result = new Big(0);
  const bigOne = Big(numberOne);
  const bigTwo = Big(numberTwo);
  if (operation === '+') {
    result = bigOne.plus(bigTwo);
  }
  if (operation === '-') {
    result = bigOne.minus(bigTwo);
  }
  if (operation === 'X') {
    result = bigOne.times(bigTwo);
  }
  if (operation === '÷') {
    result = bigOne.div(bigTwo);
  }
  if (operation === '%') {
    result = `${bigOne.times(100).div(bigTwo)}%`;
  }
  return result.toString();
};

export default operate;

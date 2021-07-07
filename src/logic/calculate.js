import Big from 'big.js';
import operate from './operate';

const calculate = (data, btnName) => {
  const { total, next } = data;
  const result = {};
  const bigTotal = Big(parseFloat(total));
  const bigNext = Big(parseFloat(next));
  if (btnName === '+/-') {
    result.total = Big(bigTotal * -1);
    result.next = Big(bigNext * -1);
  }
  if (btnName === 'A/C') {
    result.total = '0';
  }
  if (btnName === '.') {
    result.total = `${bigTotal}.${bigNext}`;
  }
  if (
    btnName === '+'
    || btnName === '-'
    || btnName === 'X'
    || btnName === '÷'
    || btnName === '%'
  ) {
    result.total = operate(data.total, data.next, btnName);
    result.operation = btnName;
  }
  return result;
};

export default calculate;

import operate from './operate';

const calculate = (data, btnName) => {
  const result = { total: Number, next: Number, operation: '' };
  if (btnName === '+/-') {
    result.total = data.total * -1;
    result.next = data.next * -1;
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

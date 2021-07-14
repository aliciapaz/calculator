import operate from './operate';

const calculate = (data = {}, btnName) => {
  let { total, next, operation } = data;
  const numbers = Array(10)
    .fill(null)
    .map((n, i) => i.toString());
  const operators = ['+', '-', 'X', '÷', '%'];

  if (btnName === '+/-') {
    return {
      ...data,
      total: total * -1,
      next: next * -1,
    };
  }

  if (btnName === 'AC') {
    return {
      ...data,
      total: null,
      next: null,
      operation: null,
    };
  }

  if (btnName === '.') {
    if (!next.includes('.')) {
      next += btnName;
    }
  }

  if (numbers.includes(btnName)) {
    while (next === null) {
      next = '';
    }
    next += btnName;
  }

  if (operators.includes(btnName)) {
    while (next !== null && operation !== null) {
      total = operate(total, next, operation);
      operation = btnName;
      next = null;
      operation = null;
    }
    while (next !== null) {
      total = next;
      next = null;
    }
    if (next == null || operation == null) {
      operation = btnName;
    }
  }

  if (btnName === '=') {
    if (total && !next) {
      const result = total;
      total = result;
    }
    if (!total && !next) {
      total = 0;
    }
    if (total && next && operation) {
      total = operate(total, next, operation);
      next = null;
      operation = null;
    }
  }

  return { total, next, operation };
};

export default calculate;

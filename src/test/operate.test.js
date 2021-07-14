import operate from '../logic/operate';

describe('basic operations', () => {
  const x = 5;
  const y = 10;

  test('returns the sum of two numbers', () => {
    expect(operate(x, y, '+')).toStrictEqual('15');
  });

  test('returns the diference between two numbers', () => {
    expect(operate(x, y, '-')).toStrictEqual('-5');
  });

  test('returns the product between two numbers', () => {
    expect(operate(x, y, 'X')).toStrictEqual('50');
  });

  test('returns the quotientt between two numbers', () => {
    expect(operate(x, y, '÷')).toStrictEqual('0.5');
  });

  test('returns the percentage relation between two numbers', () => {
    expect(operate(x, y, '%')).toStrictEqual('50%');
  });
});

import calculate from '../calculate';

describe('Tests for calculate function', () => {
  test('Calculations with only zero should be undefined', () => {
    const obj = {
      total: 0,
      next: '0',
      operation: '÷',
    };
    const buttonName = '0';
    expect(calculate(obj, buttonName).next).toBeUndefined();
  });
  test('Perform calculation when equal is called', () => {
    const obj = {
      total: 10,
      next: '5',
      operation: '+',
    };
    const buttonName = '=';
    expect(calculate(obj, buttonName).total).toBe('15');
  });
  test('Append numbers to each other when operations is not called', () => {
    const obj = {
      total: 0,
      next: '5',
      operation: '+',
    };
    const buttonName = '4';
    expect(calculate(obj, buttonName).next).toBe('54');
  });
  test('Clear when AC is called', () => {
    const obj = {
      total: 9,
      next: '5',
      operation: '+',
    };
    const buttonName = 'AC';
    expect(calculate(obj, buttonName).next).toBeNull();
    expect(calculate(obj, buttonName).total).toBeNull();
    expect(calculate(obj, buttonName).operation).toBeNull();
  });
});

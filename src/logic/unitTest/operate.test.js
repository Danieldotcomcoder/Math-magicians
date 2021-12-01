import operate from '../operate';

describe('Tests for the operate function', () => {
  test('Adds 1 + 2 to equal 3', () => {
    expect(operate(1, 2, '+')).toBe('3');
  });
  test('Subtract 7 from 20 to equal 13', () => {
    expect(operate(20, 7, '-')).toBe('13');
  });
  test('Multiply 7 by 10 to equal 70', () => {
    expect(operate(7, 10, 'x')).toBe('70');
  });
  test('Divide 16 by 4 to equal 4', () => {
    expect(operate(16, 4, '÷')).toBe('4');
  });
  test('Divide 16 by 0 to be should return cant divide by zero', () => {
    expect(operate(16, 0, '÷')).toBe("Can't divide by 0.");
  });
  test('Remainder of 100 by 4 to equal 0', () => {
    expect(operate(100, 4, '%')).toBe('0');
  });
});

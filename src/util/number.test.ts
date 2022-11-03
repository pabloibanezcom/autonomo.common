import { roundTwoDigits } from './number';

describe('roundTwoDigits', () => {
  test('returns a two decimal digits max no matter input decimal length', () => {
    const numberA = roundTwoDigits(2);
    const numberB = roundTwoDigits(2.1);
    const numberC = roundTwoDigits(2.11111116);
    expect(numberA).toBe(2);
    expect(numberB).toBe(2.1);
    expect(numberC).toBe(2.11);
  });

  test('returns a rounded two decimal digits when input decimal is longer than 2', () => {
    const numberA = roundTwoDigits(14.14499999);
    const numberB = roundTwoDigits(14.14500001);
    expect(numberA).toBe(14.14);
    expect(numberB).toBe(14.15);
  });

  test('return input when  input is zero, null or undefined', () => {
    expect(roundTwoDigits(0)).toBe(0);
    expect(roundTwoDigits(null)).toBe(null);
    expect(roundTwoDigits(undefined)).toBe(undefined);
  });
});

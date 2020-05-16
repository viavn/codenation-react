const { fibonacci, isFibonacci } = require('../src/index');

describe('Fibonacci', () => {
  it('Should not to be empty', () => {
    expect(fibonacci().length).toBeGreaterThan(0);
  });

  it('Should contain number 5', () => {
    expect(isFibonacci(5)).toBeTruthy();
  });

  it('Should not contain number 4', () => {
    expect(isFibonacci(4)).toBeFalsy();
  });
});

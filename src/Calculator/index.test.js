const calculator = require('./index');

test('Calculator sum should be ok', () => {
  expect(calculator.sum(2, 2)).toBe(4);
});
const findSum = require('./multiples');

describe('Multiples of 3 and 5', () => {
  test('should return multiples below 10', () => {
    const multiples = [3,5,6,9]
  expect(findSum(10)).toEqual(multiples);
  });

  test.only('should return sum of multiples below 10', () => {
  expect(findSum(1000)).toEqual(23);
  });
  
});
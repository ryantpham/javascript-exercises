const fizzBuzz = require('./fizzBuzz'); // Adjust the path as necessary

describe('fizzBuzz', () => {
  test('returns "fizz" for numbers divisible by 3', () => {
    expect(fizzBuzz(3)).toBe('fizz');
    expect(fizzBuzz(6)).toBe('fizz');
    expect(fizzBuzz(9)).toBe('fizz');
    // Add more cases as needed
  });

  test('returns "buzz" for numbers divisible by 5', () => {
    expect(fizzBuzz(5)).toBe('buzz');
    expect(fizzBuzz(10)).toBe('buzz');
    // Add more cases as needed
  });

  test('returns "fizzbuzz" for numbers divisible by both 3 and 5', () => {
    expect(fizzBuzz(15)).toBe('fizzbuzz');
    expect(fizzBuzz(30)).toBe('fizzbuzz');
    // Add more cases as needed
  });

  test('returns the number itself for numbers not divisible by 3 or 5', () => {
    expect(fizzBuzz(1)).toBe(1);
    expect(fizzBuzz(2)).toBe(2);
    expect(fizzBuzz(4)).toBe(4);
    // Add more cases as needed
  });
  
});

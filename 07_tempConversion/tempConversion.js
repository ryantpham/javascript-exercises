const convertToCelsius = function (fahrenheit) {
  celsius = (fahrenheit - 32) * (5 / 9) * 10;
  return Math.round(celsius) / 10;
};

const convertToFahrenheit = function (celsius) {
  fahrenheit = ((celsius * 9) / 5 + 32) * 10;
  return Math.round(fahrenheit) / 10;
};

//tests
console.log(convertToCelsius(32)) // fahrenheit to celsius, should return 0
console.log(convertToFahrenheit(0)) // celsius to fahrenheit, should return 32
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

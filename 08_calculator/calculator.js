const add = function(num1,num2) {
	return num1 + num2;
};

const subtract = function(num1,num2) {
  return num1 - num2;
};

const sum = function(arr) {
  let sum = 0;
  for(let i = 0; i < arr.length;i++){
    sum += arr[i];
  }
  return sum;
};

const multiply = function(arr) {
  let multipliedSum = 1;
  for(let i = 0; i < arr.length; i++){
    multipliedSum *= arr[i];
  }
  return multipliedSum;
};

const power = function(num,y) {
  return Math.pow(num,y);
};

const factorial = function(num) {
    //loop x times
    //create array that adds each value
    //multiply all numbers together at the end
    //multiply 1*2*3 x times

  let allNums = [];
  for(let i = 1; i <=num; i++){
    allNums.push(i);
  }

  let factorialResult = 1;
  for(let i = 0; i < allNums.length; i++){
    factorialResult *= allNums[i];
  }
  return factorialResult;
};

//tests
console.log(factorial(10)) //expect 3628800

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

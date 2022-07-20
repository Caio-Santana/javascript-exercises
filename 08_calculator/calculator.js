const add = function(a, b) {
  if (arguments.length === 0) {
    return 0;
  }
  return a + b;
};

const subtract = function(a, b) {
  if (arguments.length === 0) {
    return 0;
  }
  return a - b;
};

const sum = function(array) {
	if (array.length === 0) {
    return 0;
  }

  let result = 0;
  array.forEach(n => result += n);
  return result;
};

const multiply = function(array) {
	if (array.length === 0) {
    return 0;
  }

  let result = 1;
  array.forEach(n => result *= n);
  return result;
};

const power = function(a, b) {
  if (arguments.length === 0) {
    return 0;
  }
	
  return Math.pow(a,b);
};

const factorial = function(n) {
	if (n === 0) {
    return 1;
  }

  return factorial(n - 1) * n;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

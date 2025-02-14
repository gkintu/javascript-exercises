const add = function(a, b) {
  return a + b;
	
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(arr) {
  let sum = 0;
  arr.forEach(el => {
    sum += el;
  })
  return sum;
	
};

const multiply = function(arr) {
 return arr.reduce((acc, number) => acc * number, 1);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(n) {
	if (n < 0) {
    return undefined;
  }

  let result = 1;

  for (i = 1; i <=n; i++) {
    result *= i;
  }

  return result;
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

const add = function(a, b) {
  return a + b;
	
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(arr) {
  let sum = 1;
  arr.forEach(el => {
    sum += el;
  })
  return sum;
	
};

const multiply = function(arr) {
  let sum = "";
  arr.forEach(el => {
    sum *= el;
  })
  return sum;
};

const power = function() {
	
};

const factorial = function() {
	
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

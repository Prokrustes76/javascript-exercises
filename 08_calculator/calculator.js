const add = function(...arr) {
	return arr.reduce((a, b) => a + b, 0)
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(arr) {
	return arr.reduce((a, b) => a + b, 0)
};

const multiply = function(...arr) {
	return arr.reduce((a, b) => a * b, 1)
};

const power = function(a, b) {
	return a ** b
};

const factorial = function(n) {
	return n == 1 ? 1 :
         factorial(n - 1) * n
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

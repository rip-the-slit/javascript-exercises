const add = function(...args) {
	return args.reduce((total, operand) => total += operand)
};

const subtract = function(...args) {
  return args.reduce((total, operand) => total -= operand)
};

const sum = function(arr) {
	return arr.length != 0 ? arr.reduce((total, operand) => total += operand) : 0;
};

const multiply = function(arr) {
	return arr.reduce((total, operand) => total *= operand)
};

const power = function(operand, power = 2) {
	return operand**power;
};

const factorial = function(num) {
	let result = 1
  if (num > 1) {
    for (let i = 1; i <= num; i++) result *= i;}
  return result
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

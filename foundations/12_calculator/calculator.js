const add = function(a, b) {
  return a + b
};

const subtract = function(a, b) {
  return a - b
};

const sum = function(array) {
	let sum = 0

  for (i = 0; i < array.length; i++) {
    sum += array[i]
  }

  return sum
};

const multiply = function(array) {
  let result = array[0]

  for (i = 1; i < array.length; i++) {
    result *= array[i]
  }

  return result
};

const power = function(base, power) {
	return Math.pow(base, power)
};

const factorial = function(number) {
	if (number === 0) {
    return 1
  }

  let result = number

  for (let i = number; i > 1; i--) {
    result = result * (i - 1)
  }

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

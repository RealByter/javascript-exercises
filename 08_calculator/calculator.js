const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const sum = numbers => numbers.reduce((sum, number) => (sum += number), 0);

const multiply = numbers =>
	numbers.reduce((product, number) => (product *= number), 1);

const power = (a, b) => a ** b;

const factorial = number => {
	let result = 1;
	for (let i = 1; i <= number; i++) {
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
	factorial,
};

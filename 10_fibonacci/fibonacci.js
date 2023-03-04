const fibonacci = size => {
	if (size < 0) {
		return 'OOPS';
	}

	let current = 1;
	let previous = 1;
	for (let i = 2; i < size; i++) {
		const temp = current;
		current += previous;
		previous = temp;
	}
	return current;
};

// Do not edit below this line
module.exports = fibonacci;

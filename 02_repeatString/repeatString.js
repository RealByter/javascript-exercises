const repeatString = function (str, mult) {
	let newStr = '';

	if (mult < 0) {
		return 'ERROR';
	}

	for (let i = 0; i < mult; i++) {
		newStr += str;
	}

	return newStr;
};

// Do not edit below this line
module.exports = repeatString;

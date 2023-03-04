const palindromes = str => {
	const newStr = str
		.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '')
		.replaceAll(' ', '')
		.toLowerCase();
	return newStr === [...newStr].reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;

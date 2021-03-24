const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
	const search = matrix.flat().filter(element => element === '^^');
	let count = 0;
	if (search.length > 0) {
		count = search.length;
	}
		return count;
};

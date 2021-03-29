const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
	const { repeatTimes, separator = "+", addition = "", additionRepeatTimes, additionSeparator = "|" } = options;
  const withAddition = new Array(additionRepeatTimes).fill(String(addition)).join(additionSeparator);
	const result = new Array(repeatTimes).fill(str + withAddition).join(separator);
	
	return result;
};
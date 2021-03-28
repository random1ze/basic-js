const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
	const turnsSpeedPerSeconds = turnsSpeed / 3600;
	const turns = 2 ** disksNumber - 1;
	const seconds = Math.floor(turns / turnsSpeedPerSeconds);
	const result = { turns, seconds };
	return result;
};

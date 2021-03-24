const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  const num = Number(sampleActivity);

	if (
		typeof sampleActivity !== "string" ||
		isNaN(num) === true ||
		num <= 0 ||
		num > MODERN_ACTIVITY
	) {
		return false;
	}
		const k = 0.693 / HALF_LIFE_PERIOD;
		const t = Math.log(MODERN_ACTIVITY / num) / k;
		const result = Math.ceil(t);
		return result;
};

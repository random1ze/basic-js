const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
		if (!Array.isArray(arr)) {
			return 0;
		};
		const depth = 1 + Math.max(0, ...arr.map(el => this.calculateDepth(el)));
		return depth;
	};
};
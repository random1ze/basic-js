const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
	if (Array.isArray(members)) {
		const onlyNames = members.filter(member => typeof member === 'string');
		const firstLetters = onlyNames.map((name) => name.trim().charAt(0).toUpperCase());
		const result = firstLetters.sort().join('');
		return result;
	}
	return false;
};
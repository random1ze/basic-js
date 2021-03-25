const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date == null) {
    return "Unable to determine the time of year!";
  } else if (Object.prototype.toString.call(date) !== "[object Date]") {
    throw Error;
  }
  const month = date.getMonth();
  if (month > 10 || month <= 1) {
    return "winter";
  } else if (month > 1 && month <= 4) {
    return "spring";
  } else if (month > 4 && month <= 7) {
    return "summer";
  }
  return "autumn";
};

const convertToCelsius = function(fahr) {
  return Math.round((fahr - 32) / 90 * 5) / 10
};

const convertToFahrenheit = function(cels) {
  return Math.round(cels * 50 / 9 + 32) / 10
};


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

const convertToCelsius = function(f) {
  let c = (f - 32) * (5 / 9);
  let ans = Math.round(c * 10) / 10;
  return ans;
};

const convertToFahrenheit = function(c) {
  let f = c * (9 / 5) + 32;
  let ans = Math.round(f * 10) / 10;
  return ans;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

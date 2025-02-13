const convertToCelsius = function(c) {
   c = (c - 32) * (5/9);
   return c.toFixed(1)
};

const convertToFahrenheit = function(f) {
  return f = f * (9/5) + 32;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

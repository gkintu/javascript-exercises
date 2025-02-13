const convertToCelsius = function(c) {
    c = (c - 32) * (5/9);
   if(c > 0) {
    return parseFloat(.toFixed(1));
   }

   return c
};

const convertToFahrenheit = function(f) {
  return f = f * (9/5) + 32;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

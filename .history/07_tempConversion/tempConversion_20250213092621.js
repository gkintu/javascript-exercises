const convertToCelsius = function(c) {
    c = (c - 32) * (5/9);
   if(c !== 0) {
    return parseFloat(c.toFixed(1));
   }

   return c
};

const convertToFahrenheit = function(f) {
   f = f * (9/5) + 32;

  if(f !== 0) {
    return parseFloat(f.toFixed(1));
   }

   return f
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

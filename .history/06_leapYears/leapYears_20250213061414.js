const leapYears = function(num) {
   if (num % 4 === 0  (num % 400 === 0 && num % 100 === !0)) {
      return true
       }
       return false
};

// Do not edit below this line
module.exports = leapYears;

// looks like i need 3 conditions
// divisble by 4 OR 400 but !NOT 100
// return 

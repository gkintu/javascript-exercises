const sumAll = function(num, num1) {
   let min = Math.round(Math.min(num, num1));
   let max = Math.round(Math.max(num, num1));

    sum = 0;

    for(i = min; i <= max; i++) {
        sum += i;
    }

     return sum < 0 ? "ERROR" : sum;  
};

// Do not edit below this line
module.exports = sumAll;

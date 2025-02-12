const sumAll = function(num, num1) {
   let min = Math.min(num, num1);
   let max = Math.max(num, num1);

    sum = 0;

    for(i = min; i <= max; i++) {
        sum += i;
    }

     return sum < 0 ? "ERROR" : sum;  
};

// Do not edit below this line
module.exports = sumAll;

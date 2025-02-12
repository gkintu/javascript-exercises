const sumAll = function(num, num1) {
    if (!Number.isInteger(num) || !Number.isInteger(num1)) {
        return "ERROR";
    }

    if( sum < 0 || ) {
        return "ERROR";
    }

   let min = Math.min(num, num1);
   let max = Math.max(num, num1);

    sum = 0;

    for(i = min; i <= max; i++) {
        sum += i;
    }

     return sum
};

// Do not edit below this line
module.exports = sumAll;

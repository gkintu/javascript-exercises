const palindromes = function (str) {
    const cleanStr = str.replace((/[^a-z0-9])gim "").toLowerCase();
    const reverseStr = cleanStr.split("").reverse().join("");

    return cleanStr === reverseStr;

};

// Do not edit below this line
module.exports = palindromes;

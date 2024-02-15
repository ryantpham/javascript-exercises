const reverseString = function(string) {
    let reverse = string;
    let result = "";
    reverse = reverse.split("").reverse();
    result = reverse.join("");
    return result;
};


// Do not edit below this line
module.exports = reverseString;

const palindromes = function (str) {
    //Grabs String Backwards
    let backwardArr = [];
    for(let i = str.length -1; i >= 0; i--){
        backwardArr.push(str[i]);
    }
    let backward = backwardArr.join('');

    if(str === backward){
        return true;
    } else {
        return false;
    }
};

//tests
console.log(palindromes('racecar')) // true
console.log(palindromes('tacos')) // false

// Do not edit below this line
module.exports = palindromes;

//pseudocode
    //create empty array
    //loop through string forward
    //append to string to merge
    //loop through string backwards
    //append to string to merge
    //if both are = to eachother return true else false
const sumAll = function(a,b) {
    if ( a < 0 || b < 0|| typeof a !='number' || typeof b != 'number' || isNaN(a) || isNaN(b)){
        return "ERROR"
    }

    //loop between number a and b
    const numArr = [];
    if(a < b){
        let i = a;
        while(i <= b){
            numArr.push(i)
            i++;
        }
    } else {
        let i = b
        while(i <= a){
            numArr.push(i);
            i++;
        }
    }
    

    //loop to add all values in array
    let sum = 0;
    for(i=0; i<numArr.length; i++){
        sum += numArr[i];
    }
    return sum

};


//tests
console.log(sumAll(1, 4)) // returns the sum of 1 + 2 + 3 + 4 which is 10
console.log(sumAll(4,1)) // returns 10
console.log(sumAll(NaN,3)) // returns ERROR
console.log(sumAll(-1, 4)) // returns ERROR
// Do not edit below this line
module.exports = sumAll;

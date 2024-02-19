const removeFromArray = function(arr, ...numRemove) {
    let newArr = [];
    for (i=0; i<arr.length; i++){
        if(!numRemove.includes(arr[i])){
            newArr.push(arr[i])
        }
        
    }
    return newArr
};

console.log(removeFromArray([1,2,3,4],3)); //expect [1,2,4]
console.log(removeFromArray([1,2,3,4],3,4)); //expect [1,2]
// Do not edit below this line
module.exports = removeFromArray;

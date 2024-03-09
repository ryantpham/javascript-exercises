const fibonacci = function(num) {
    if(num < 0){
        return "OOPS";
    } else if (num === 1){
        return 1;
    } else {
        emptyArr = [0 , 1];
        for (let i = 0; i < num; i++){
            let c = emptyArr[i] + emptyArr[i + 1];
            emptyArr.push(c);
        }
        return emptyArr[num];
    }
    
};
console.log(fibonacci(4)); // returns the 4th member of the series: 3  (1, 1, 2, 3)
console.log(fibonacci(6)); // returns 8
// Do not edit below this line
module.exports = fibonacci;

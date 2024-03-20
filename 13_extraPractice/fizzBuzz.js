function fizzBuzz(num){
    let result = "";

    for (let i = 1; i <= num; i++){
        if (i % 3 == 0 && i % 5 == 0){
            result = "fizzbuzz";
        } else if (i % 3 == 0){
            result = "fizz";
        } else if (i % 5 == 0){
            result = "buzz";
        } else {
            result = i;
        }

    }
    return result

}

//Multiply the number
function multiply(number){
    digits = number.toString().length;
    return number *(5*digits)
}
console.log(multiply(200)); // expect 15

module.exports = fizzBuzz;
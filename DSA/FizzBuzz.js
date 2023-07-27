var fizzBuzz = function(n) {
    let arr = [];
    for(let i = 1; i<=n; i++){
        if(i%3 == 0){
            arr.push("Fizz");
        }else if(i%5 == 0){
            arr.push("Buzz");
        }else {
            arr.push(`${i}`);
        }
        if(i%3 == 0 && i%5 == 0){
            arr.pop();
            arr.push("FizzBuzz");
        }
    }
    return arr;
};
console.log(fizzBuzz(10));
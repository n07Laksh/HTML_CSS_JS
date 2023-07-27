console.log("Memoization");


function iterate(num){
    let sum = 0;
    for(let i = 1; i <= num; i++){
       sum+=i;
    }
    return sum;
}
function memoiz(num,callback){
    let cache = {};

    if(!cache.num){
        let result = callback(num);
        cache.num = result;
        return result;
    }

    return cache.num;


    // return function(...args){
    //     let n = args[0];
    //     if(n in cache){
    //         console.log("cache");
    //         return cache[n];
    //     }else{
    //         let result = callback(n);
    //         cache[n] = result;
    //         console.log("normal");
    //         return result;
    //     }
    // }
};


// console.iterate();
// let result = memoiz(iterate);
// console.log(result(10));
// console.timeEnd();

console.time();
console.log(memoiz(1000,time));
console.timeEnd();

let t1 = performance.now();
console.log(memoiz(1000,iterate));
let t2 = performance.now();
console.log(t2-t1);


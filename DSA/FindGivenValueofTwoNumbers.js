//this is for run prompt in terminal
// const prompt = require("prompt-sync")({siging:true});


console.log(`find two number if their addition is 26`)
var arr = [47, 79, 38, 0, 23, 22, 11, 15, 23, 342, 32, 284];
var sort = arr.sort((a, b) => a - b);
console.log(sort)

// with for loop
console.log("with for loop")

for (let i = 0; i < sort.length; i++) {
    for (let j = 1; j < sort.length; j++) {
        if (sort[i] + sort[j] == 26) {
            console.log(`${sort[i]} + ${sort[j]} = ${sort[i] + sort[j]}`);
        }
        break;
    }
}

//with while loop
console.log("with while loop")
var start = 0;
var end = sort.length - 1;
while (start < end) {
    if (sort[start] + sort[end] > 26) {
        end--;
    } else if (sort[start] + sort[end] < 26) {
        start++;
    } else {
        console.log(`${sort[start]} + ${sort[end]} = ${sort[start] + sort[end]}`)
        break;
    }
}

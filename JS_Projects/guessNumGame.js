const prompt = require("prompt-sync")({sigint:true});
console.log("Guess the nunmer game");


let random = Math.floor(Math.random() * (70 - 60) + 60);
// console.log(random)

let input;
let tryTime = 0;

while(input != random){
    tryTime+=1;
    input = prompt("Enter a Number:");
    if(input == random){
        console.log("Congratulation you guess the correct number");
        console.log(`you reach the game after ${tryTime} try`);
    }
    else if(input > random && input < 100){
        console.log("Entered number is greater than actual number")
    }
    else if(input<random){
        console.log("Entered number is smaller than actual number")
    }
    else{
        console.log("Please enter number between 1 to 10033")
    }
}
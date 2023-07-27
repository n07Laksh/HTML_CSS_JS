console.log("Disco Light background color method");

setInterval(myFunc,100)
let a = document.body;
// function myFunc(){
//     (a.style.backgroundColor == "yellow") ? a.style.backgroundColor = "green" : a.style.backgroundColor = "yellow";
// }
console.log(a.style.backgroundColor)



function myFunc(){
    let random = Math.floor(Math.random() * 10);
    switch(random){
        case 1:
            a.style.backgroundColor = "red";
            break;
        case 2:
            a.style.backgroundColor = "green";
            break;
        case 3:
            a.style.backgroundColor = "yellow";
            break;
        case 4:
            a.style.backgroundColor = "black";
            break;
        case 5:
            a.style.backgroundColor = "pink";
            break;
        case 6:
            a.style.backgroundColor = "crimson";
            break;
        case 7:
            a.style.backgroundColor = "coral";
            break;
        case 8:
            a.style.backgroundColor = "darkblue";
            break;
        default:
            a.style.backgroundColor = "aqua";

    }
    
}
console.log('Debouncing');

// for(let i = 0; i < 10; i++) {
//     console.log(`hello ${i} times`);
// }

let count = 1;
function show(){
    console.log("showing  " + count++);
}

function myDebounce(call,t){
    let timer;
    return function(...args){
        if(timer) clearTimeout(timer);
        timer = setTimeout(()=>{
            call();
        },t);
    }
    
};

const BetterFunction=myDebounce(show,1000)


// function BetterFunction(){
//     setTimeout(()=>{
//         console.log("Hello");
//     },1000);
// };
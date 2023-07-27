console.log("Throatling");


function throttle(func,d){
return function(...args){
    document.getElementById("myId").disabled = true;
    setTimeout(()=>{
        func();
    },d)
}

}

const newFunc = throttle(()=>{
    document.getElementById("myId").disabled = false;
    console.log("Clicked throttle");
},3000)

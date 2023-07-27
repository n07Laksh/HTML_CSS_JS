// Set()
// Filter()
// Reduce()
// forEach()
// Array.from();
// loop Method


let arr = [1, 2, 3, 2, 4, 1];
let arrStr = ['laksh', 'khem', 'nishad', 'laksh', 'khem', 'laksh', 'saraipali', 'laksh'];
let arr1 = [];
let i, len = arr.length;



    // with loop method
for (i = 0; i < len; i++) {
    if (arr1.indexOf(arr[i]) == -1) {
        arr1.push(arr[i])
    }
}
console.log(arr1)



//with sorted array




 

arr.sort();
let b = [];
let temp;
for(i=0; i<len; i++){
    if(arr[i] !== temp){
        b.push(arr[i]);
        temp = arr[i];
    }    
}
console.log(b)



   // loop with object method
let obj = {};
for (i = 0; i < len; i++) {
    obj[arr[i]] = true;
}
console.log(Object.keys(obj));




// loop with forEach() function
    let array = ['hello'];  
    let a = arrStr.forEach((val)=>{
        if(!array.includes(val)){
            array.push(val)
        }
    })
    console.log(array)




     // Set Method  one line code
console.log([...new Set(arrStr)]);
    // without [] and spread (...) this set method return object
    // if we write ...new Set(arrStr) it will return string

    // Array.from() method
    // with this method we don't need a spread operator
console.log(Array.from(new Set(arr)));




    // with filter() method 
    let arr2 = arrStr.filter((value,index)=>{
        return  arrStr.indexOf(value) === index;
    })
    console.log(arr2)




    //  with reduce method
    function reduceMethod(){
        return arrStr.reduce((prev,val)=>{
            if(!prev.includes(val)){
                prev.push(val)
            }
            return prev;
        },[])
    }
    console.log(reduceMethod())
        
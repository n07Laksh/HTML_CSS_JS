

// first method
// function isPalidrome(str){
//     let reverse = str.split("").reverse().join("").toLowerCase();
//     return reverse === str.toLowerCase();
// }


// second method
// function isPalidrome(str){
//     let reverse ="";
//     for(let i = str.length-1; i>=0; i--){
//         reverse+=str[i];
//     }
//     return reverse.toLowerCase() === str.toLowerCase();
// }


//third method
function isPalidrome(str){
    let newStr = str.toLowerCase();
    let left = 0, right = str.length-1;

    while(left < right){
        if(newStr[left] !== newStr[right]) return false;

        left++;
        right--;
    }
    return true;
}




const result = isPalidrome('level');
// console.log(result)
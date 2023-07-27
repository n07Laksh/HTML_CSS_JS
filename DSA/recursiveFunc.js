// recursive function
let num = 0;
function func() {
    num++;
    // console.log(num)
    if (num == 10) {
        return;
    }
    func();
}
func();


// Advanced recursive function

let i = 0, j = 1;
function isSorted(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }
    return true;
}
let array = [];
function fun(arr) {
    if (isSorted(arr)) {
        array = arr;
        return;
    }
    else if (arr[i] < arr[j]) {
        i++;
        j++;
        fun(arr);
    } else {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i = 0;
        j = 1;
        fun(arr);
    }
}
fun([5, 2, 12,
    19, 299, 22, 58, 99,
    9, 4]);
// console.log(array)




// helper recursive function 
function parentFunc(array){
    let myArr = [];
    function helperRecurisiveFunc(arr){  
        if(arr.length == 0){
            return;
        } 
        if(arr[0] % 2 !== 0){
            myArr.push(arr[0]);
        }
        helperRecurisiveFunc(arr.slice(1))
    };
    helperRecurisiveFunc(array);
    return myArr;
};
let result = parentFunc([1,2,3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]);
console.log(result);
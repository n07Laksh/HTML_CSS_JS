console.log("Insertion Sorting");

let array = [2,8,3,5,1,7,9,1];
let len  = array.length;
let res = insertionFunc(array,len);
console.log(res)
function insertionFunc(arr,l){
    for(let i = 1; i < l; i++){
        let temp = arr[i];
        let j = i-1;
        while(j>=0 && arr[j] > temp){
            arr[j+1]= arr[j];
            j--;
        }
        arr[j+1] = temp;
    }
    return arr;
}
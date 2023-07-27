console.log("Selection Sorting");


let array = [9, 2, 7, 4, 1];
let length = array.length;
let result = selectionSorting(array,length);
console.log(result);
function selectionSorting(arr,len){
    for(let i = 0; i < len; i++){
        let min = i; // 0 1 4
        for(let j = i+1; j < len; j++){ // 1 2 3 4
            if(arr[j] < arr[min])
                min = j;
        }
        if(i!==min){
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    return arr;
}
console.log("Bubble Sorting");

let array = [5, 6, 9, 3, 2, 1, 0, 2];

bubbleSort(array);
// function bubbleSort(arr) {
//     for (let i = arr.length; i > 0; i--) {
//         for (let j = 0; j < i; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//             }
//         }
//     }
// }
// console.log(array);


// bubbleSort Optimization the loop count if arr is sorted 

function bubbleSort(arr) {
    for (let i = arr.length; i > 0; i--) {
        let isSwapped;
        // console.log(arr)
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                isSwapped = true;
            }
        }
        if(!isSwapped){
            break;
        }
    }
}












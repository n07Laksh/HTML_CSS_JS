console.log('Binary Search Method');


let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
const result = binarySearch(array, 10);
console.log(result)
function binarySearch(arr, num) {
    let min, max, midIndex;
    min = 0;
    max = arr.length - 1;
    while (min <= max) {
        midIndex = Math.floor((min + max) / 2); // return 7
        console.log(midIndex)
        // console.log('midIndex '+midIndex+" min "+min+" max "+max);
        if (arr[midIndex] < num) {
            min = midIndex + 1;
        } else if (arr[midIndex] > num) {
            max = midIndex - 1;
        } else {
            return midIndex
        }
    }
    return -1;

}
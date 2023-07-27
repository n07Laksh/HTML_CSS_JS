let array = [1, 1, 1, 2, 3, 4, 5, 5, 6, 7, 8, 8, 8];

// find Unique Values only
function countUnique(arr) {
    if (arr.length > 0) {
        let i = 0;
        for (let j = 1; j < arr.length; j++) {
            if(arr[i] !== arr[j]){
                i++;
                arr[i] = arr[j];
            }
        }
         i+=1;
         return arr.slice(0,i);
    }else {
        throw new Error("Your Array is Empty");
    }
}
let result = countUnique(array)
console.log(result)
console.log(array)



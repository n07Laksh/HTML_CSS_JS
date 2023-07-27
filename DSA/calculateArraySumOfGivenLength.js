let array = [1,2,3,4,5,7,9,1,3,5,9,1,1,9];
let len = 4;
let result = sumOfArrayOfGivenLength(array,len);
console.log(result)
function sumOfArrayOfGivenLength(arr,leng){
    if(arr.length > 0){
        let max = 0;
        for(let i = 0; i < arr.length - leng + 1; i++){
            let temp = 0;
            for(let j = 0; j < leng; j++){
                temp += arr[i + j];
            }
            if(max < temp){
                max = temp;
            }
        }
        return max;
    }
}
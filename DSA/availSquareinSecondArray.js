
console.log('Check if first Array values square is available in second array');

// first method
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [1,4,9,16,25];
const result1 = checkSquare1(arr1, arr2);
console.log('first method')
console.log(result1);

function checkSquare1(arr1, arr2) {
    let i, j, len1 = arr1.length, len2 = arr2.length;
    for (i = 0; i < len1; i++) {
        let isResult = false;
        for (j = 0; j < len2; j++) {
            if (Math.pow(arr1[i], 2) === arr2[j]) {
                isResult = true;
            }
            if (j === arr2.length - 1) {
                if (!isResult) {
                    return false;
                }
            }
        }
    }
    return true;
}




// second method 
console.log('second method')
const result2 = checkSquare2([1, 2, 3, 4, 5], [1,4,9,16,25]);
console.log(result2);

function checkSquare2(arr1, arr2) {

    for(let i=0; i< arr1.length; i++){ 
        if(arr2.indexOf(Math.pow(arr1[i],2)) == -1){
            return false;
        }
    }
    return true;
}



// third Method
console.log('Third Method');
const result3 = checkSquare3([1, 3, 4, 3], [1,9,16,9]);
console.log(result3)
function checkSquare3(arr1,arr2){
    let key,map1={},map2={};
    
    for(key of arr1)
        map1[key] = (map1[key] || 0) + 1;

    for(key of arr2)
        map2[key] = (map2[key] || 0) + 1;

    for(key in map1){
        if(!map2[key*key])
            return false;

        if(map1[key] !== map2[key * key]){
            return false;
        }
    }
    console.log(map1, map2)
    return true;
}

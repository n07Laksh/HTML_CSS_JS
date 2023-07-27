//find missing number 
let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 10];
let num = arr3.length;
console.log(findMissingNum(arr3, num));

function findMissingNum(arr, num) {

    for (let i = 0; i <= num; i++){
      let number = i + 1;
      if(number != arr[i]){
            return number;
      }
    }
}









function argu(...arg){
console.log(arguments)
}

argu(1,2,3,4,5,6,7,8,9)
//find two array are same or not
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [1, 2, 3, 4, 5];
console.log(checkArray(arr1, arr2));

function checkArray(ar1, ar2) {
    if (ar1.length != ar2.length) {
        return false;
    }
    else {
        // first method with stringify
        // if (JSON.stringify(ar1) == JSON.stringify(ar2)) {
        //     return true;
        // } else {
        //     return false;
        // }


        // second method with loop to compare single values
        for (let i = 0; i < ar1.length; i++)
            if (ar1[i] != ar2[i]) {
                return false;
            }
        return true;
    }
}
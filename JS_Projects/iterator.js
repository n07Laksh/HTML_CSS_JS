function iterate(arr) {
    let num = 0;
    return {
        next: function () {
            if (num < arr.length) {
                return {
                    name: arr[num++],
                    done: false
                }
            } else {
                return {
                    done: true
                }
            }
        }
    }
}

let myArry = ['apple','Mango','banana','papaya'];
let iter = iterate(myArry);
console.log(iter.next().name);
console.log(iter.next().name);
console.log(iter.next().name);
console.log(iter.next().name);
console.log(iter.next());
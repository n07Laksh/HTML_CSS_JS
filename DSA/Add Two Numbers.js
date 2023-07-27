
// this function works properly with leetcode solution but the leetcode playground not iterate with this function  this problem is handled with iterator method like .next; .val;
function func(l1,l2){
    let tot1 = "";
    let tot2 = "";
    for(let i = l1.length -1; i >= 0; i--)
        tot1 += l1[i];
    for(let j = l2.length -1; j >= 0; j--)
        tot2 += l2[j];

        return (Number(tot1) + Number(tot2)).toString().split("").reverse();
        
};

// let l1 = [2,4,3], l2 = [5,6,4];  // output [7,0,8]
// let l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9] // output  [8,9,9,9,0,0,0,1]
let l1 =[0],l2=[0]; // output [0]
console.log(func(l1,l2));
let arr = [[1,0],[0,0],[1,0]];
let len = arr.length;
let k = 2;
let result = func(arr,len,k);
console.log(result)

function func(a,l,s) {
    let map = {};
    for(let i=0;i<l;i++){
        for(let j=0;j<a[i].length;j++){
            if(a[i][j] === 1){
                map[i] = (map[i] || 0) + 1;
            }
            else {
                if(a[i].indexOf(1) == -1){
                    map[i]= 0;
                }
            }
            }
        }
    return Object.keys(map).sort((a,b) => map[a] - map[b]).slice(0,s);
}

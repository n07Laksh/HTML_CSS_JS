
console.log(maximumWealth([[1,5],[7,3],[3,5]])); //[[1,2,3],[3,2,1]]



function maximumWealth (accounts) {
    let arr = [];
    for(let i=0; i<accounts.length; i++){
        let temp = 0;
        for(let j=0; j < accounts[i].length; j++){
            temp += accounts[i][j];
        }
        arr.push(temp);
    }
    return Math.max.apply(null,arr);
};
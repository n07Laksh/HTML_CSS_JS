

console.log(func("abcabcbb"));

function func(str) {
    let set = new Set(); // p w 
    let start = 0;
    let pos = 0;

    while(pos < str.length) {
        if(!set.has(str[pos])){
            set.add(str[pos]);
            pos++;
        }else{
            set.delete(str[start]);
            start++;
        }
    }
    return set.size;
}
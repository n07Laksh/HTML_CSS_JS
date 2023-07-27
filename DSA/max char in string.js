
let str = "hello world";
let len = str.length;
let result = maxChar(str,len);
console.log(result)


// first method my own method
// function maxChar(str,len){
//     let map = {};
//     for(let i = 0;i<len;i++){
//         map[str[i]] = (map[str[i]] || 0) + 1;
//     }

// console.log(map)
//     let max="";
//     let st = "";
//     for(let key in map){
//         if(map[key] > max){
//             max = map[key];
//             st = key
//         }
//     }
//     return st;

// }


// second method technical suneja ka method

function maxChar(str,len){
    const map = {};
    str.split("").forEach(elem=>{
         map[elem] = map[elem]?map[elem] + 1 :1;
    });

    let max = 1;
    let char =str[0];

    for(let key in map){
        if(map[key] > max){
            max  = map[key];
            char = key;
        }
    }
    return char;
}
console.log("Linear Search");

let data = [
    {url:"facebook", data:"www.facebook.com"},
    {url:"google", data:"www.google.com"},
    {url:"twitter", data:"www.twitter.com"}
];
const res = linearSearch(data,"twitter");
console.log(res);

function linearSearch(arr, key){
    for(let i of arr){
        if(i['url'] === key){
            return true;
        }
    }
    return false;
}
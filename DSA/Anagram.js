// Anagram DSA 
console.log("Anagram check of two Strings")
let string1 = "hello";
let string2 = "llheo";
let check = countNumber(string1, string2);
console.log(check)
function countNumber(a, b) {
    if (a.length != b.length) {
        return false;
    }
    let newStr = {};
    for (let str1 of a) {
        newStr[str1] = (newStr[str1] || 0) + 1;
        //    console.log(newStr[str1])
    }
    for (let str2 of b) {
        if (!newStr[str2])
            return false;
        newStr[str2] -= 1;
    }
    return true;
}
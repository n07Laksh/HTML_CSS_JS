function canConstruct(ransomNote, magazine) {
    let rans = ransomNote.split("");// [a,a];
    let mag = magazine.split("");// [a,b];
    
    let start = 0;
    while(start < rans.length){
        if(!mag.includes(rans[start])){
            return false;
        }else {
            mag.splice(mag.indexOf(rans[start]),1);
            start++;
        }
    }
    return true;
};

let a = canConstruct("aa","babbbbbbrtgvfdsag");
console.log(a);

// (❁´◡`❁)🛹👨😎
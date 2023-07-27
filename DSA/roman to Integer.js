console.log(func("x"));// I II III IV V VI VII VIII IX X XI XII.....


function func(roman){
    if(roman === 0){
        return 0;
    }
    let rom = roman.toUpperCase();
    const symb = {
        "I":1,
        "V":5,
        "X":10,
        "L":50,
        "C":100,
        "D":500,
        "M":1000
    };

    let res = 0;
    for(let i = 0; i< rom.length; i++){
        let curr = symb[rom[i]];
        let next = symb[rom[i+1]];

        
        if(curr < next){
            res += next - curr;
            i++;
        }else{
            res += curr;
        }
    }
    return res;
}





function* generate(){
let i = 0;
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
    // while(true){
    //   yield i++;
    // }

}

let a = generate();
console.log(a.next().value);
console.log(a.next().value);
console.log(a.next().value);
console.log(a.next().value);
console.log(a.next().value);
console.log(a.next().value);
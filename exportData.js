let a = 'Laxmilal';
let b = 'Nishad';
let c = "Laksh"

export {a, b};
export {c}

let func = (a) => {
    var c = "hello";
    var d = "ji";
    return c + " " + d;
    // alert(a.innerHTML)

}

 let htmlPageData = document.getElementById("ancor4");
 export default func(htmlPageData);


 let htmlPageData1 = document.getElementById("ancor3");
 htmlPageData1.innerHTML = "Hello This is laksh"
//  export{htmlPageData1}



let arr = ['name','surname','village'];
export {arr}
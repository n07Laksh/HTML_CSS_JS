console.log("hello this is a data filtering website");


filterProduct("all")
function filterProduct(c) {
    let x, i;
    x = document.getElementsByClassName("column");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
        removeClassName(x[i], "show");

        if (x[i].className.indexOf(c) > -1)
            addClassName(x[i], "show");
    }
}
function addClassName(element, text) {
    let i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = text.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1)
            element.className += " " + arr2[i];

    }
}


function removeClassName(element, text) {
    let i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = text.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1){
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}


let button = document.getElementById("button");
let btn = button.getElementsByClassName("btn");
let i;

for (i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function () {
        let active = document.getElementsByClassName("active");
        active[0].className = active[0].className.replace(" active", "");
        this.className += " active";
    })
}

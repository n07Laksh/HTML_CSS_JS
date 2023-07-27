console.log("slide images");


setInterval(func, 5000)


let indexNum = 1;
//for interval time
function func() {
    indexNum++;
    showImage(indexNum)
}

showImage(indexNum);

function imgSlide(num) {
    showImage(indexNum += num)
}
function goToSlide(num) {
    showImage(indexNum = num)
}

function showImage(n) {
    let i;
    let a = document.getElementsByClassName("mySlide");
    let b = document.getElementsByClassName("dot");
    for (i = 0; i < a.length; i++)
        a[i].style.display = "none";
    for (i = 0; i < b.length; i++)
        b[i].className = b[i].className.replace(" active", "");
    if (n > a.length)
        indexNum = 1;
    if (n < 1)
        indexNum = a.length;
    a[indexNum - 1].style.display = "block";
    b[indexNum - 1].className += " active";
}

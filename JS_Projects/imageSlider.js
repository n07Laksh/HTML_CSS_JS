console.log("Practice Image Slider");


var img = [ '/1.png','/2.png','/3.png','/4.png','/serenity.jpg'];
var i = 0;
let image = document.getElementById('slider');
function next() {
i++;
if(i>=img.length){
i = 0;
}
    image.src = img[i];

}
function prev() {
    i--;
    if(i<=0){
        i = img.length-1
    }
    image.src = img[i];
}
setInterval(next,3000);



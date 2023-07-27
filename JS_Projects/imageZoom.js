console.log("Zoom image feature");

zoomImage("imgId", "zoomImageContainer")


function zoomImage(imgID, resultID) {
    // select the image and result div
    let img = document.getElementById(imgID);
    let result = document.getElementById(resultID);
    // create lens
    let div = document.createElement("DIV");
    div.setAttribute("class", "image-zoom-lens")
    // insert div to the page 
    img.parentElement.insertBefore(div, img);
    // get the width and height result and div elements
    let cx = result.offsetWidth / div.offsetWidth;
    let cy = result.offsetHeight / div.offsetHeight;
    // set background propert to the result div
    result.style.backgroundImage = "url('" + img.src + "')";
    result.style.backgroundSize = (img.width * cx) + "px " + (img.height * cy) + "px";

    // set the event to the image and div(lens)
    div.addEventListener("mousemove", moveLens);
    img.addEventListener("mousemove", moveLens);
    //for Mobile
    div.addEventListener("touchmove", moveLens);
    img.addEventListener("touchmove", moveLens);

function moveLens(e){
    e.preventDefault();

    let pos = getCursorPosition(e);
     
    x = pos.x - 15;
    console.log(x);
    y = pos.y -15;
    console.log(y);
    if(x>img.width - div.offsetWidth){x = img.width-div.offsetWidth};
    if(x<0){x=0};
    if(y>img.height - div.offsetHeight){y = img.height - div.offsetHeight}
    if(y<0){y=0}
    
    div.style.left = x + "px";
    div.style.top = y + "px";
    
    result.style.backgroundPosition = "-" + (x * cx) + "px -" + (y * cy) + "px";
}

function getCursorPosition(e){
   let a, x = 0, y=0;
   e = e || window.event;
   a = img.getBoundingClientRect();
   x = e.pageX - a.left;
   y = e.pageY - a.top;

   x = x - window.pageXOffset;
   y = y - window.pageYOffset;
   console.log(x + " " + y)
   return {x:x,y:y}
}
}

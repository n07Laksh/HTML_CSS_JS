console.log("Image Comaprison");


initSlider();


function initSlider() {
    let i, x;
    x = document.getElementsByClassName("div2Container");
    for (i = 0; i < x.length; i++)
        createOverlay(x[i]);

    function createOverlay(img) {
        var div, img, clicked = 0, w, h;
        /*get the width and height of the img element*/
        w = img.offsetWidth;
        h = img.offsetHeight;
        img.style.width = (w / 2) + "px";
        // create the overlay div
        div = document.createElement("DIV");
        div.setAttribute("class", "image-slider");
        // insert new element to the document 
        img.parentElement.insertBefore(div, img);
        // center the div element to the images
        div.style.top = h/2 - (div.offsetHeight/2)+ "px";
        div.style.left = w/2 - (div.offsetWidth/2) + "px";

        // addEventListener when user press the div element 
        div.addEventListener("mousedown", startSlide);
        // clear addEventListener when user release the mouse button 
        window.addEventListener("mouseup", stopSlide)

        //for mobile device 
        div.addEventListener("touchstart", startSlide);
        window.addEventListener("touchend", stopSlide)

        function startSlide(e){
            e.preventDefault();
            clicked = 1;
            window.addEventListener("mousemove",slideMove)
            window.addEventListener("touchmove" , slideMove)
        }

        function stopSlide(){
            clicked = 0;
        }

        function slideMove(e){
            let pos;
            if(clicked == 0) return false;

            pos = getCursorPos(e);
            
            if(pos < 0) pos = 0;
            if(pos > w) pos = w;

            slide(pos);

            
        }

        function getCursorPos(e){
            let a, x=0;
            e = (e.changedTouches)?e.changedTouches:e;

            a = img.getBoundingClientRect();
            // get cursor position 
            x = e.pageX - a.left;
            //consider any page scroll
            x = x- window.pageXOffset;
            return x;
        }

        function slide(x){
            img.style.width = x + "px";

            div.style.left = img.offsetWidth - (div.offsetWidth/2) + "px";
        }
    }

}
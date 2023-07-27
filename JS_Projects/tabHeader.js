




// top navBar
function myFunction(){
    let x = document.getElementById("topNav");

        if(x.className == "topnav"){
            x.className += " resp";
        }else{
            x.className = "topnav";
        }
    }












// tabHeader

function showContent(idColor,evt){

    let content =  document.getElementsByClassName("content");
    let i;

    for(i=0;i<content.length;i++){
        if(content[i].style.display === "block"){
            content[i].style.display = "none";   
        }
    }
   
    let tab = document.getElementsByClassName("tabLink");
    for(i=0;i<tab.length;i++){
        tab[i].style.backgroundColor = '';
    }
    document.getElementById(idColor).style.display = "block";
    evt.style.backgroundColor = idColor;
}
document.getElementById("setDefault").click();
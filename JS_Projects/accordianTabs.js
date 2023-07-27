console.log("laksh");
// let accordian = document.getElementsByClassName("accordian");
// let i;
// for(i=0;i<accordian.length;i++){
//     accordian[i].addEventListener('click',function(){
//     this.classList.toggle("active");
//     console.log(this.classList)

//    var panal = this.nextElementSibling;
// //    console.log(panal)
// //    if(panal.style.display === "block"){
// //     panal.style.display = "none";
// //    }else{
// //     panal.style.display = "block";
// //    }
//      if(panal.style.maxHeight){
//         panal.style.maxHeight = null;
//      }else{
//         panal.style.maxHeight = panal.scrollHeight + "px";
//      }
//     });
// }




// for tabs Link

function showContent(e,name){
let tabs = document.getElementsByClassName("tabsLinks");
let i;
for(i=0;i<tabs.length;i++){
    tabs[i].className = tabs[i].className.replace(" active","");
}
let content = document.getElementsByClassName("content");
for(i=0;i<content.length;i++){
    content[i].style.display = "none";
}
document.getElementById(name).style.display = "block";
e.currentTarget.className += " active";
}

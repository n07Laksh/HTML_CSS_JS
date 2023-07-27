function func(){
let input,filter,ul,li,a,i;
input = document.getElementById("search");
console.log(input.value.length)
filter = input.value.toUpperCase();
ul = document.getElementById("myul");
li = ul.getElementsByTagName("li");

for(i=0;i<li.length;i++){
a = li[i].getElementsByTagName("a")[0];
if(a.innerHTML.toUpperCase().includes(filter) == true){
    li[i].style.display = '';
}else{
    li[i].style.display = "none";
}
}
}
// function func(){
// let input,filter,para,a,i;
// input = document.getElementById("search");
// filter = input.value.toUpperCase();
// para = document.getElementsByTagName("p");

// for(i=0;i<para.length;i++){
//     a = para[i].innerHTML;
//     if(a.toUpperCase().includes(filter) === true){
//         para[i].style.display = "";
//         // para[i].style.backgroundColor = "red";
//     }else{
//         para[i].previousElementSibling.style.display = "none";
//         para[i].style.display = "none";
//     }
// }
// }
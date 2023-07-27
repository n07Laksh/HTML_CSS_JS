console.log(`Welcome to my Project`);

displayShow();
let addEvent = document.getElementById('btn');
addEvent.addEventListener('click', function (e) {
    let addTxt = document.getElementById("addTxt");
    let title = document.getElementById("title");
    let notes = localStorage.getItem("notes");
    if(notes == null){
        newObj = [];
    }else{
        newObj = JSON.parse(notes);
    }
    const Obj = {
       title:title.value,
       text:addTxt.value
    }
    newObj.push(Obj);
    localStorage.setItem('notes', JSON.stringify(newObj));
    addTxt.value = "";
    title.value = "";
    // console.log(notes);
    displayShow();
})

function displayShow(){
    let notes = localStorage.getItem("notes");
    if(notes == null){
        newObj = [];
    }else{
        newObj = JSON.parse(notes)
    }
let html = "";
newObj.forEach(function(element,index){
    html += `
    <div id="secondDiv" class="firstDiv">
    <div id="cardDiv2" class="divCard">
        <h3><b>${element.title}</b></h3>  
        <p id="paragraph">${element.text}</p>          
    <input type="submit" onclick="deleteFunc(this.id)" id="${index}" class="btn1" value="Delete">
    </div>
</div>
    `;
});
let elm = document.getElementById('notes');
if(newObj.length != 0){
    elm.innerHTML = html;
}else{
    elm.innerHTML = `<h2>Nothing to show please enter some text</h2>`;
}

}

function deleteFunc(index){
let notes = localStorage.getItem('notes');
if(notes == null){
    newObj= [];
}else{
    newObj = JSON.parse(notes);
}
newObj.splice(index, 1);
localStorage.setItem('notes', JSON.stringify(newObj));
displayShow();
}
 
let addTxt = document.getElementById("searchTxt");
addTxt.addEventListener('input', function(){
    let inputVal = addTxt.value;
    let cards = document.getElementsByClassName('divCard');
    Array.from(cards).forEach(function(element){
        let cardTxt = element.getElementsByTagName("p")[0].innerHTML;
        if(cardTxt.includes(inputVal)){
            element.style.display = "block";
        }else{
            element.style.display = "none";
        }
    })
})
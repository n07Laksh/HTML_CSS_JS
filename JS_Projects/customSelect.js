console.log("Custom Select")

let i, j, customSelect, customSelectLength, firstDiv, select, selectLength, secondDiv, thirdDiv;

customSelect = document.getElementsByClassName("custom-select");
customSelectLength = customSelect.length;

for (i = 0; i < customSelectLength; i++) {

    select = customSelect[i].getElementsByTagName("select")[0];
    selectLength = select.length;

    firstDiv = document.createElement("DIV");
    firstDiv.setAttribute("class", "select-selected");
    firstDiv.innerHTML = select.options[select.selectedIndex].innerHTML;

    customSelect[i].appendChild(firstDiv);

    secondDiv = document.createElement("DIV");
    secondDiv.setAttribute("class", "select-item item-hide");

    for (j = 1; j < selectLength; j++) {

        thirdDiv = document.createElement("DIV");
        thirdDiv.innerHTML = select.options[j].innerHTML;
        thirdDiv.addEventListener("click", function () {
            let customSelect, i, customSelectLength, defaultDisplay;

            customSelect = this.parentNode.parentNode.getElementsByTagName("select")[0];
            customSelectLength = customSelect.length;
            defaultDisplay = this.parentNode.previousSibling;

            for (i = 0; i < customSelectLength; i++) {
                if (customSelect.options[i].innerHTML == this.innerHTML) {
                    defaultDisplay.innerHTML = this.innerHTML;
                    customSelect.selectedIndex = i;
                    let y = this.parentNode.getElementsByClassName("same-as-selected");
                    let k, yLength = y.length;
                    for (k = 0; k < yLength; k++) {
                        y[k].removeAttribute("class");
                    }
                    this.setAttribute("class", "same-as-selected")
                    break;
                }

            }
            defaultDisplay.click();
        });


        secondDiv.appendChild(thirdDiv)
    }
    customSelect[i].appendChild(secondDiv);

    firstDiv.addEventListener("click", function(e){
        e.stopPropagation();
        //closeSelect(this);
        this.nextSibling.classList.toggle("item-hide")
        this.classList.toggle("arrow-translate");
    })
}

// function closeSelect(elem){
//     let i, x, y, xl,yl, arr = [];
//     x = document.getElementsByClassName("select-item");
//     y = document.getElementsByClassName("select-selected");
//     xl = x.length;
//     yl = y.length;
//     for(i=0; i < yl; i++){
//         if(elem = y[i])
//         arr.push(i);
//     }
//     for(i=0;i<xl;i++){
//         if(arr.indexOf(i))
//         x[i].classList.add("item-hide");
//     }

// }
// document.addEventListener("click", closeSelect);
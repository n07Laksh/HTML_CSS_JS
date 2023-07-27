console.log("Mult steps form ");


var currentTab = 0;
showTab(currentTab);

function showTab(n) {

    let tab = document.getElementsByClassName("tab");

    tab[n].style.display = "block";

    if (n == 0) {
        document.getElementById("prevBtn").style.display = "none";
    } else {
        document.getElementById("prevBtn").style.display = "block";
    }
    if (n == (tab.length - 1)) {
        document.getElementById("nextBtn").innerHTML = "Submit";
    } else {
        document.getElementById("nextBtn").innerHTML = "Next";
    }

    showSteps(n);
}



function nextPrev(n) {
    let tab = document.getElementsByClassName("tab");

    if (n == 1 && !validateForm()) return false;

    tab[currentTab].style.display = "none";

    currentTab = currentTab + n;

    if (currentTab >= tab.length) {
        currentTab = 0;

    }

    showTab(currentTab);
}



function validateForm() {
    let tab,i,selectTab,valid = true;
     tab = document.getElementsByClassName("tab");
     selectTab = tab[currentTab].getElementsByTagName('input');

    for (i = 0; i < selectTab.length; i++){
        if(selectTab[i].value == ""){
            selectTab[i].className += " invalid";
            valid = false;
        }
    }
    if(valid){
        document.getElementsByClassName("step")[currentTab].className += " finish";
    }
    return valid;
}



function showSteps(n) {
    let i, step = document.getElementsByClassName("step");
    for (i = 0; i < step.length; i++) {
        step[i].className = step[i].className.replace(" active", "");
    }
    step[n].className += " active";
}
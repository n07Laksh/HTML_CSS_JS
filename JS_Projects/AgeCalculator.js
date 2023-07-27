console.log("Age Calculator");


    let date = document.getElementById('date');
    let month = document.getElementById('month');
    let year = document.getElementById('year');
function totalAge() {
    let newDate = new Date();
if(date.value == ""||month.value == ""||year.value == ""){
        alert('Please Enter Your Date of Birth');
    }else{
    let a = newDate.getDate() - date.value;
    let b = newDate.getMonth() - month.value;
    let c = newDate.getFullYear() - year.value;
    document.getElementById('totalAge').innerHTML = 
    `${c} Year ${b+1} Month and ${a} Days`;
    }
}
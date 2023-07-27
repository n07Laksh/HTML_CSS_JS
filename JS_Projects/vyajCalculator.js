
let totalMoney = document.getElementById("field1");
let rate = document.getElementById("field2");
let month = document.getElementById("field3");
let day = document.getElementById("field4");
function calculate(){
    let vyaj = totalMoney.value * rate.value * month.value/100;
    let monthlyVyaj = totalMoney.value * rate.value / 100; // for monthly vyaj
    let dayVyaj1 = monthlyVyaj / 30; // for daily vyaj
    let total = vyaj + (dayVyaj1 * day.value);
    document.getElementById("demo2").innerHTML = total.toFixed(0);
}
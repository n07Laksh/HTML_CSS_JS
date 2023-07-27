
// Higher Oreder Function (HOF)
let array = ['Laksh','KhemLal','LaxmiLal'];

function sendNotification(name){
    console.log(`Hey ${name} Please Visit My Birthday Party`)
}
function sendWarning(name){
    console.log(`Hey ${name} don't forget to visit`)
}

function Users(user, HOF){
     user.map(value => HOF(value)+ " " + sendWarning(value))
}

let result = Users(array, sendNotification);
// let warning = Users(array, sendWarning);
// console.log(result)
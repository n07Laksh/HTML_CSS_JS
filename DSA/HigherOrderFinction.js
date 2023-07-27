// Higher Oreder Function (HOF)
let array = ['Laksh', 'KhemLal', 'LaxmiLal'];

function sendNotification(name) {
    console.log(`Hey ${name} Please Visit My Birthday Party`)
}
function sendReminder(name) {
    console.log(`Hey ${name} don't forget to visit`)
}

function Users(user, HOF, warn) {
    user.map(value => HOF(value) + " " + warn(value))
}

let result = Users(array, sendNotification, sendReminder);
// let warning = Users(array, sendWarning);
console.log(result)
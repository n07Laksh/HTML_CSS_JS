let a = 0;
function webWorker(){
    let x = "Hello My Name Is Laksh"
     a += 1;
    postMessage(x + " " + a + "<br>");
    setTimeout(webWorker,1000)
}

webWorker();

var i = 0;

function timedCount() {
  i = i + 1;
//   postMessage(i);
//   setTimeout("timedCount()",500);
}

timedCount();
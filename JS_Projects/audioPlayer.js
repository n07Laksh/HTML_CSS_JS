console.log("Audio Player Project");

let player = document.getElementById("player");
let progress = document.getElementById("bar");
let playbtn = document.getElementById("playbtn");
let currentTime = document.getElementById("currentTime");

let playpause = function () {
    if (player.paused) {
        player.play();
    } else {
        player.pause();
    }
}
playbtn.addEventListener("click", playpause);
player.onplay = function () {
    playbtn.classList.remove("fa-play");
    playbtn.classList.add("fa-pause");
}
player.onpause = function () {
    playbtn.classList.remove("fa-pause");
    playbtn.classList.add("fa-play");
}

player.ontimeupdate = function () {
    let ct = player.currentTime;
    currentTime.innerText = timeFormat(ct);
    let duration = player.duration;
    prog = Math.floor((ct * 100) / duration);
    progress.style.setProperty("--progress", prog + "%");
}

function timeFormat(ct) {
    let min = Math.floor(ct / 60);
    let sec = Math.floor(ct % 60);
    if (sec < 10) {
        sec = "0" + sec;
    }
    return min + ":" + sec;
}

let btn = document.getElementsByClassName("btn");
let info = document.getElementById("name");
for(let i of btn){
    i.addEventListener("click", function () {
        player.src = `Audio/${this.parentElement.nextElementSibling.innerText}.mp3`;
        info.innerText = `${this.parentElement.nextElementSibling.innerText}`;
        
        player.play();
        
    });
}


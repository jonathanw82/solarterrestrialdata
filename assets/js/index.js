"use strict";

const currentTime = document.getElementById("currentTime");
const dateTimeinfo = document.getElementById("refresh");
const down = document.getElementById("countdown");
let minutes = 10;
let seconds = 60;

// when the page first loads initially hard refresh the page
window.addEventListener("load", function () {
    getTime();
});

setInterval(clock, 1000);             // call the clock funtion every 1 second to give RTC

// reload the page and get the current time and date
function refresh() {
    location.reload(true);
    getTime();                      // call the time function
}

// get the current time and display it on the page when called
function getTime() {
    const d = new Date();
    dateTimeinfo.innerHTML = `Last Refeshed ${d}`;
}

// get the current date and time and display when called every second
function clock() {
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    const d = new Date();
    const h = d.getHours();
    const m = d.getMinutes();
    const s = d.getSeconds();
    const day = d.getDate();
    const month = d.getMonth();
    const year = d.getFullYear();
    currentTime.innerHTML = `${day}-${monthNames[month]}-${year}     ${h}:${(m < 10 ? "0" + m : m)}:${(s < 10 ? "0" + s : s)}`;
    countDown();        // call the coutdown timer each second
    seconds--;          // remove a second each time
}

// countdown until the page is reloaded
function countDown() {
    if (seconds == 0) { minutes--; seconds = 60; } // if seconds == 0 remove a minute
    if (minutes == -1) {                           // if minutes equal -1 then refresh the page innerHTML `` is the so you dont see the -1
        down.innerHTML = ``;
        refresh(); 
    } else {
        down.innerHTML = `Refresh In = ${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}`
    }
}
"use strict";

let counter = 0;
const currentTime = document.getElementById("currentTime");
const dateTimeinfo = document.getElementById("refresh");

// when the page first loads initially hard refresh the page
window.addEventListener("load", function () {
    window.history.forward(1);
    getTime();
});

setInterval(refresh, 600000);         // call the refresh funtion every 10mins
setInterval(clock, 1000);

function refresh() {
    counter++;                      // increase the counter by 1 each time
    window.history.forward(1);      // clear cash and reload
    getTime();                      // call the time function
    console.log(`The page has refeshed count number ${counter}`);
}

// get the current time and display it on the page when called
function getTime() {
    const d = new Date();
    dateTimeinfo.innerHTML = `Page last refeshed ${d}`;
}

// get the current date and time and display when called every second
function clock() {
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const d = new Date();
    const h = d.getHours();
    const m = d.getMinutes();
    const s = d.getSeconds();
    const day = d.getDay();
    const month = d.getMonth();
    const year = d.getFullYear();
    currentTime.innerHTML = `${day}-${monthNames[month]}-${year}    ${h}:${m}:${(s < 10 ? "0" + s : s)}`;
}
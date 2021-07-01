var timeDisplayEl = $("#time-display");

function displayTime() {
    var rightNow = moment().format("MMMM Do YYYY, h:mm:ss a")
    timeDisplayEl.text(rightNow);
}

setInterval(displayTime, 1000);



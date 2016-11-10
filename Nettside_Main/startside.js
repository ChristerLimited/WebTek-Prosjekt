/**
 * Created by PederGB on 03.11.2016.
 */
function checkOpen() {
    var today = new Date();
    var hour = today.getHours();
    var min = today.getMinutes();
    var day = today.getDay();
    var timeinMin = (hour*60)+min
    console.log(timeinMin)
    console.log(day)

    /* -------- For weekday --------- */
    if (day < 6) {
        if ((1140 - timeinMin < 60) && (timeinMin < 1140)) {
            time.innerHTML = "Stenger snart"
        }
        else if ((timeinMin > 540) && (timeinMin < 1140)) {
            time.innerHTML = "Åpent nå"
        }
        else {
            time.innerHTML = "Stengt"
        }
    }


    /* -------- For weekday --------- */
    else if (day == 6) {
        if ((960 - timeinMin < 60) && (timeinMin < 960)) {
            time.innerHTML = "Stenger snart"
        }
        else if ((timeinMin > 540) && (timeinMin < 960)) {
            time.innerHTML = "Åpent nå"
        }
        else {
            time.innerHTML = "Stengt"
        }
    }

    else {
        time.innerHTML = "Stengt"
    }
}

window.addEventListener("load",checkOpen)
/**
 * Created by Peder Grundvold on 03.11.2016.
 */

/* --- Gets time of day --- */
function checkOpen() {
    var today = new Date();
    var hour = today.getHours();
    var min = today.getMinutes();
    var day = today.getDay();
    var timeinMin = (hour*60)+min

    /* -------- For weekday --------- */
    if (day < 6) {                        /* If it's a weekday */
        if ((1140 - timeinMin < 60) && (timeinMin < 1140)) { /* If the shop is nearing closing time. */
            time.innerHTML = "Stenger snart"
        }
        else if ((timeinMin > 540) && (timeinMin < 1140)) { /* If it's open and not nearing closing time */
            time.innerHTML = "Åpent nå"
        }
        else {
            time.innerHTML = "Stengt" /* If timeinMin is not in the given itervals the shop is closed */
        }
    }


    /* -------- For weekday --------- */
    else if (day == 6) {                   /* Different closing times at saturday */
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

    else {              /* Closed at sundays */
        time.innerHTML = "Stengt"
    }
}

window.addEventListener("load",checkOpen)
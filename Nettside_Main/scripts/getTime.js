/**
 *
 * FILE NAME: getTime.js
 * WRITTEN BY: Peder Grundvold
 * WHEN: November 2016
 * PURPOSE: Tells the user whether the store is open now or not.
 */

/* --- Gets time of day --- */
function checkOpen() {
    var today = new Date();
    var hour = today.getHours();
    var min = today.getMinutes();
    var day = today.getDay();
    var timeinMin = (hour*60)+min;

    /* -------- For weekday --------- */
    /* Closed at sundays */
    if (day == 0) {
        time.innerHTML = "Stengt";
    }
    else if (day < 6) {
        if ((1140 - timeinMin < 60) && (timeinMin < 1140)) { /* If the shop is nearing closing time. */
            time.innerHTML = "Stenger snart";
        }
        else if ((timeinMin > 540) && (timeinMin < 1140)) { /* If it's open and not nearing closing time */
            time.innerHTML = "Åpent nå";
        }
        else {
            time.innerHTML = "Stengt";/* If timeinMin is not in the given itervals the shop is closed */
        }
    }
    /* -------- For weekday --------- */
    /* Different closing times at saturday */
    else  {
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
}

window.addEventListener("load",checkOpen);
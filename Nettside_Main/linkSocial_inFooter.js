/**
 * Created by PederGB on 10.11.2016.
 */
var facebookIcon = document.getElementById("facebook");
var instagramIcon = document.getElementById("instagram");

function changeIconIns() {
    instagramIcon.style.height = "83px";
    instagramIcon.style.fill = "whitesmoke";
    facebookIcon.style.bottom = "3px";
    facebookIcon.style.left = "3px";
}
function returnIconIns() {
    instagramIcon.style.height = "80px";
    instagramIcon.style.fill = "#ffffff";
    facebookIcon.style.bottom = "0";/* This is added to prevent neighbor element from moving. */
    facebookIcon.style.left = "0";
}

function changeIconFace() {
    facebookIcon.style.height = "83px";
    facebookIcon.style.fill = "whitesmoke";
    instagramIcon.style.bottom = "3px";
    instagramIcon.style.left = "0";
}
function returnIconFace() {
    facebookIcon.style.height = "80px";
    facebookIcon.style.fill = "#ffffff";
    instagramIcon.style.bottom = "0";
}


function linkIns() {
    window.open("https://www.instagram.com/steintoykjelleren/", "_blank");
}
function linkFace() {
    window.open("https://www.facebook.com/Steintoykjelleren/?fref=ts", "_blank");
}

instagramIcon.addEventListener("mouseover", changeIconIns);
instagramIcon.addEventListener("mouseout", returnIconIns);
facebookIcon.addEventListener("mouseover", changeIconFace);
facebookIcon.addEventListener("mouseout", returnIconFace);

instagramIcon.addEventListener("click", linkIns);
facebookIcon.addEventListener("click", linkFace);






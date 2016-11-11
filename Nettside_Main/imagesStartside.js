/**
 * Created by PederGB on 11.11.2016.
 */
var images = ["image2","image3","image4","image5"]
imageText1 = document.getElementById("imageText1");
imageText2 = document.getElementById("imageText2");
newFade = 0;

var mouse = true
function setFade() {
    mouse = false
}

/* -- ImageMenu First -- */
function changeHover0() {
    mouse = true
    document.getElementById(images[0]).addEventListener("mouseout", setFade)
    document.getElementById(images[0]).style.height = "225px";
    document.getElementById(images[0]).style.width = "280px";

    document.getElementById(images[0]).style.opacity = "0.8";
    setTimeout (function () {
        imageText1.style.opacity = newFade;
        newFade+=0.005;
        if (newFade < 1 && mouse == true) changeHover0()
        else newFade=0
        imageText2.style.opacity = 0;
        imageText3.style.opacity = 0;
        imageText4.style.opacity = 0;
    }, 0.01)
}

function returnHover0() {
    document.getElementById(images[0]).style.height = "220px";
    document.getElementById(images[0]).style.width = "275px";
    document.getElementById(images[0]).style.opacity = "1";
    imageText1.style.opacity = "0";
    newFade = 0
}

function linkFirst() {
    window.open("produkter_interior.html", "_self");
}

/* -- ImageMenu Second -- */
function changeHover1() {
    mouse = true
    document.getElementById(images[1]).addEventListener("mouseout", setFade)
    document.getElementById(images[1]).style.height = "225px";
    document.getElementById(images[1]).style.width = "285px";
    document.getElementById(images[1]).style.opacity = "0.8";
    setTimeout (function () {
        imageText2.style.opacity = newFade;
        newFade+=0.005;
        if (newFade < 1 && mouse == true) changeHover1()
        else newFade=0
        imageText1.style.opacity = 0;
        imageText3.style.opacity = 0;
        imageText4.style.opacity = 0;
    }, 0.01)
}

function returnHover1() {
    document.getElementById(images[1]).style.height = "220px";
    document.getElementById(images[1]).style.width = "280px";
    document.getElementById(images[1]).style.opacity = "1";
    imageText2.style.opacity = "0";
    newFade = 0
}

function linkSecond() {
    window.open("produkter_kjokken.html", "_self");
}

/* -- ImageMenu Third -- */
function changeHover2() {
    mouse = true
    document.getElementById(images[2]).addEventListener("mouseout", setFade)
    document.getElementById(images[2]).style.height = "225px";
    document.getElementById(images[2]).style.width = "285px";
    document.getElementById(images[2]).style.opacity = "0.8";
    setTimeout (function () {
        imageText3.style.opacity = newFade;
        newFade+=0.005;
        if (newFade < 1 && mouse == true) changeHover2()
        else newFade=0
        imageText1.style.opacity = 0;
        imageText2.style.opacity = 0;
        imageText4.style.opacity = 0;
    }, 0.01)
}

function returnHover2() {
    document.getElementById(images[2]).style.height = "220px";
    document.getElementById(images[2]).style.width = "280px";
    document.getElementById(images[2]).style.opacity = "1";
    imageText3.style.opacity = "0";
    newFade = 0
}

function linkThird() {
    window.open("produkter_servise.html", "_self");
}

/* -- ImageMenu Fourth -- */
function changeHover3() {
    mouse = true
    document.getElementById(images[3]).addEventListener("mouseout", setFade)
    document.getElementById(images[3]).style.height = "225px";
    document.getElementById(images[3]).style.width = "285px";
    document.getElementById(images[3]).style.opacity = "0.8";
    setTimeout (function () {
        imageText4.style.opacity = newFade;
        newFade+=0.005;
        if (newFade < 1 && mouse == true) changeHover3()
        else newFade=0
        imageText1.style.opacity = 0;
        imageText2.style.opacity = 0;
        imageText3.style.opacity = 0;
    }, 0.01)
}

function returnHover3() {
    document.getElementById(images[3]).style.height = "220px";
    document.getElementById(images[3]).style.width = "280px";
    document.getElementById(images[3]).style.opacity = "1";
    imageText4.style.opacity = "0";
    newFade = 0
}

function linkFourth() {
    window.open("produkter_bestikk.html", "_self");
}

/* -- Event Listeners -- */

document.getElementById(images[0]).addEventListener("mouseover", changeHover0);
document.getElementById(images[0]).addEventListener("mouseout", returnHover0);
document.getElementById(images[0]).addEventListener("click", linkFirst);


document.getElementById(images[1]).addEventListener("mouseover", changeHover1);
document.getElementById(images[1]).addEventListener("mouseout", returnHover1);
document.getElementById(images[1]).addEventListener("click", linkSecond);


document.getElementById(images[2]).addEventListener("mouseover", changeHover2);
document.getElementById(images[2]).addEventListener("mouseout", returnHover2);
document.getElementById(images[2]).addEventListener("click", linkThird);


document.getElementById(images[3]).addEventListener("mouseover", changeHover3);
document.getElementById(images[3]).addEventListener("mouseout", returnHover3);
document.getElementById(images[3]).addEventListener("click", linkFourth);

/**
 * Created by Peder Grundvold on 11.11.2016.
 */
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const image4 = document.getElementById("image4");
const imageText1 = document.getElementById("imageText1");
const imageText2 = document.getElementById("imageText2");
const imageText3 = document.getElementById("imageText3");
const imageText4 = document.getElementById("imageText4");
newFade = 0;

var mouse = true;

/* Change mouse to false if mouse leaves the imagebox */
function setFade() {
    mouse = false;
}

function increaseFadeOnImage(hoveredImage, increasingImageText, noOpacityImageTexts) {
    const firstNoOpacityImageText = noOpacityImageTexts[0];
    const secondNoOpacityImageText = noOpacityImageTexts[1];
    const thirdNoOpacityImageText = noOpacityImageTexts[2];
    console.log(newFade);
    increasingImageText.style.opacity = newFade;
    newFade+=0.005;
    /*The function only restarts if the mouse is still inside the image */
    if (newFade < 1 && mouse == true) {
        changeHoverOnImage(hoveredImage,increasingImageText);
    }
    /* If the mouse leaves while function is running it will quit and return the opacity */
    else {
        newFade = 0;
    }
    firstNoOpacityImageText.style.opacity = 0;
    secondNoOpacityImageText.style.opacity = 0;
    thirdNoOpacityImageText.style.opacity = 0;
}

/* -- ImageMenu First -- */
function changeHoverOnImage(changedImage, imageText) {
    mouse = true;
    /* Check if mouse goes out while function is running */
    changedImage.addEventListener("mouseout", setFade);
    changedImage.style.height = "225px";
    changedImage.style.width = "280px";
    changedImage.style.opacity = "0.8";

    var imageTexts = [imageText1, imageText2, imageText3, imageText4];
    const noOpacityImageTexts = imageTexts.filter(function(currentImageText) {
        if (imageText != currentImageText) {
            return currentImageText;
        }
    });

    setTimeout (increaseFadeOnImage(changedImage, imageText, noOpacityImageTexts, newFade), 0.01);
}

/* Return to original on mouseout */
function returnImageToDefaultStyle(image, imageText) {
    image.style.height = "220px";
    image.style.width = "275px";
    image.style.opacity = "1";
    imageText.style.opacity = "0";
    newFade = 0;
}

/* Creates the respected link */
function openProductSectionLink(produktURL) {
    //E.g. "produkter_interior.html"
    window.open(produktURL, "_self");
}

/* --------------------------------- Reapeted code, (issue with arguments) ---------------------------- */
/* -- ImageMenu Second -- */
function changeHover1() {
    mouse = true;
    image2.addEventListener("mouseout", setFade);
    image2.style.height = "225px";
    image2.style.width = "285px";
    image2.style.opacity = "0.8";
    setTimeout (function () {
        imageText2.style.opacity = newFade;
        newFade+=0.005;
        if (newFade < 1 && mouse == true) changeHover1();
        else newFade=0;
        imageText1.style.opacity = 0;
        imageText3.style.opacity = 0;
        imageText4.style.opacity = 0;
    }, 0.01)
}

function returnHover1() {
    image2.style.height = "220px";
    image2.style.width = "280px";
    image2.style.opacity = "1";
    imageText2.style.opacity = "0";
    newFade = 0
}

function linkSecond() {
    window.open("produkter_kjokken.html", "_self");
}

/* -- ImageMenu Third -- */
function changeHover2() {
    mouse = true;
    image3.addEventListener("mouseout", setFade);
    image3.style.height = "225px";
    image3.style.width = "285px";
    image3.style.opacity = "0.8";
    setTimeout (function () {
        imageText3.style.opacity = newFade;
        newFade+=0.005;
        if (newFade < 1 && mouse == true) {
            changeHover2();
        } else {
            newFade=0;
        }
        imageText1.style.opacity = 0;
        imageText2.style.opacity = 0;
        imageText4.style.opacity = 0;
    }, 0.01)
}

function returnHover2() {
    image3.style.height = "220px";
    image3.style.width = "280px";
    image3.style.opacity = "1";
    imageText3.style.opacity = "0";
    newFade = 0
}

function linkThird() {
    window.open("produkter_servise.html", "_self");
}

/* -- ImageMenu Fourth -- */
function changeHover3() {
    mouse = true;
    image4.addEventListener("mouseout", setFade);
    image4.style.height = "225px";
    image4.style.width = "285px";
    image4.style.opacity = "0.8";
    setTimeout (function () {
        imageText4.style.opacity = newFade;
        newFade+=0.005;
        if (newFade < 1 && mouse == true) {
            changeHover3();
        }
        else {
            newFade = 0;
        }
        imageText1.style.opacity = 0;
        imageText2.style.opacity = 0;
        imageText3.style.opacity = 0;
    }, 0.01)
}

function returnHover3() {
    const image4 = document.getElementById(images[3]);
    image4.style.height = "220px";
    image4.style.width = "280px";
    image4.style.opacity = "1";
    imageText4.style.opacity = "0";
    newFade = 0
}

function linkFourth() {
    window.open("produkter_bestikk.html", "_self");
}

/* -------------------------------------------------------------------- */

/* -- Event Listeners -- */
image1.addEventListener("mouseover", changeHoverOnImage(image1,imageText1));
image1.addEventListener("mouseout", returnImageToDefaultStyle(image1,imageText1));
//image1.addEventListener("click", openProductSectionLink("produkter_interior.html"));


image2.addEventListener("mouseover", changeHoverOnImage(image2,imageText2));
image2.addEventListener("mouseout", returnImageToDefaultStyle(image2,imageText2));
//image2.addEventListener("click", openProductSectionLink("produkter_kjokken.html"));


image3.addEventListener("mouseover", changeHoverOnImage(image3,imageText3));
image3.addEventListener("mouseout", returnImageToDefaultStyle(image3,imageText3));
//image3.addEventListener("click", openProductSectionLink("produkter_servise.html"));


image4.addEventListener("mouseover", changeHoverOnImage(image4, imageText4));
image4.addEventListener("mouseout", returnImageToDefaultStyle(image4,imageText4));
//image4.addEventListener("click", openProductSectionLink("produkter_bestikk.html"));

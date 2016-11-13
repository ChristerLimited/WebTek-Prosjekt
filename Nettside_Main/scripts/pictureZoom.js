// ******************************
//
// FILE NAME: pictureZoom.js
// WRITTEN BY: Christer Hølestøl
// WHEN: November 2016
// PURPOSE: Gives the user the option to zoom in on a picture.
// ******************************

//This function is called as soon as the browser loads the page.
window.onload = function() {
    const zoomedPicturesModals = document.getElementsByClassName("zoomed_pictures");
    const zoomedPictures = document.getElementsByClassName("zoomed_pictures_content");
    const startImages = document.getElementsByClassName("start_image");
    const closeSpans = document.getElementsByClassName("close");

    //Initialize zoom functionality for every picture on the page.
    for (i = 0; i < zoomedPicturesModals.length; i++) {
        const currentModal = zoomedPicturesModals[i];
        const currentModalImage = zoomedPictures[i];
        const currentImage = startImages[i];
        const currentCloseSpan = closeSpans[i];
        //Makes the current modal's display none when clicked on.
        currentCloseSpan.onclick = function() {
            currentModal.style.display = "none";
        };
        //If a picture is clicked on, the modal picture will be displayed with the zoomed picture.
        //The zoomed picture gets the alt of its smaller version.
        currentImage.onclick = function() {
            currentModal.style.display = "block";
            currentModalImage.src = currentImage.src;
            currentModalImage.alt = currentImage.alt;
        }
    }
};

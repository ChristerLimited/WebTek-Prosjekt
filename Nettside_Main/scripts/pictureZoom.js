window.onload = function() {
    const zoomedPicturesModules = document.getElementsByClassName("zoomed_pictures");
    const zoomedPictures = document.getElementsByClassName("zoomed_pictures_content");
    const startImages = document.getElementsByClassName("start_image");
    const closeSpans = document.getElementsByClassName("close");

    for (i = 0; i < zoomedPicturesModules.length; i++) {
        const currentModule = zoomedPicturesModules[i];
        const currentModalImage = zoomedPictures[i];
        const currentImage = startImages[i];
        const currentCloseSpan = closeSpans[i];
        currentCloseSpan.onclick = function() {
            currentModule.style.display = "none";
        };
        currentImage.onclick = function() {
            currentModule.style.display = "block";
            currentModalImage.src = currentImage.src;
            currentModalImage.alt = currentImage.alt;
        }
    }
};
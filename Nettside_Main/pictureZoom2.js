window.onload = function() {
    /*const zoomedPicturesModules = document.getElementsByClassName("zoomed_pictures");
    const zoomedPictures = document.getElementsByClassName("zoomed_pictures_content");
    const startImages = document.getElementsByClassName("start_image");
    const closeSpans = document.getElementsByClassName("close");

    for (i = 0; i < zoomedPicturesModules.length; i++) {
        const currentModule = zoomedPicturesModules[i];
        const currentModalImage = zoomedPictures[i];
        const currentModuleChildren = currentModule.childNodes;
        const currentImage = startImages[i];
        const currentCloseSpan = closeSpans[i];
        currentCloseSpan.onclick = function() {
            currentModule.style.display = "none";
        };
        currentImage.onclick = function() {
            currentModule.style.display = "block";
            currentModalImage.src = currentImage.src;
            currentModalImage.alt = currentImage.alt;
            currentImage.width
        }
    }*/
    const imageContainers = document.getElementsByClassName("img-container");

    for (i = 0; i < imageContainers.length; i++) {
        const currentImageContainer = imageContainers[i];
        const imageContainerChildren = currentImageContainer.childNodes;
        const currentImage = imageContainerChildren[0];
        const currentSpanText = imageContainerChildren[1];
        currentSpanText.width = currentImage.width;
        currentSpanText.height = currentImage.height;
    }

};
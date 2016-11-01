//Script obtained from this location: http://codepen.io/desandro/pen/PqNBzj //

// external js: isotope.pkgd.js, imagesloaded.pkgd.js

// init Isotope
var grid = document.querySelector('.grid');

var iso = new Isotope( grid, {
    itemSelector: '.grid-item',
    percentPosition: true,
    masonry: {
        columnWidth: '.grid-sizer'
    }
});

imagesLoaded( grid ).on( 'progress', function() {
    // layout Isotope after each image loads
    iso.layout();
});

//END of script obtained from this location: http://codepen.io/desandro/pen/PqNBzj//
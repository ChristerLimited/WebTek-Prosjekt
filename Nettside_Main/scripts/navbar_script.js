// ******************************
// Created by Paul Erik Frivold
// November 2016
// ******************************

// myDropdown() is called when Produkter is clicked.
function myDropdown() {
  var pageWrapper = document.getElementById('page_wrapper');
  var productMenu = document.getElementById('product_menu');

  if (product_menu.style.left == '-100%') { // Checks if product_menu's inline
    slideOut(productMenu, pageWrapper);     // style is '-100%' (should be by default).
  } else {
    slideBack(productMenu, pageWrapper);
  }
}

function slideOut(submenu, wrapper) {
  submenu.style.left = '0%';                // Pulls menu onto page
  wrapper.style.top = '0px';                // Pushes page down
}

function slideBack(submenu, wrapper) {
  submenu.style.left = '-100%';             // Pushes menu off page
  wrapper.style.top = '-80px';              // pulls page up
}

// currentPage() sets color of link for active page
function currentPage() {
  // Get list of elements with classname 'current_page'
  var links = document.getElementsByClassName('current_page');

  // Iterate through list and set link color
  for (var i = 0; i < links.length; i++) {
    links[i].style.color = "yellowgreen";
  }
}

// EventListener that calls currentPage() function
window.addEventListener('onload', currentPage());

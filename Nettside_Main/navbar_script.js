function myDropdown() {
  var pageWrapper = document.getElementById('page_wrapper');
  var productMenu = document.getElementById('product_menu');

  if (product_menu.style.left == '-100%') {
    slideOut(productMenu, pageWrapper);
  } else {
    slideBack(productMenu, pageWrapper);
  }
}

function slideOut(submenu, wrapper) {
  submenu.style.left = '0%';
  wrapper.style.top = '0px';
}

function slideBack(submenu, wrapper) {
  submenu.style.left = '-100%';
  wrapper.style.top = '-80px';
}

function currentPage() {
  var links = document.getElementsByClassName('current_page');
  for (var i = 0; i < links.length; i++) {
    links[i].style.color = "yellowgreen";
  }
}

window.addEventListener('onload', currentPage());

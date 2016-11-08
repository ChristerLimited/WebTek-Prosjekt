function myDropdown() {
  var items = document.getElementsByClassName('nav_a');
  var product_menu = document.getElementById('product_menu');

  if (product_menu.style.display = 'none') {
    slideOut(product_menu, items);
  } else {
    alert('oops')
  }
}

function slideOut(submenu, tohide) {
  submenu.style.display = 'flex';
  // submenu.className = 'product_menu_max';
  for (var i = 0; i < tohide.length; i++) {
    tohide[i].style.display = 'none';
  }
  once( 1, function () {
    submenu.className = 'product_menu_max';
  });
}

function slideBack(submenu, toshow) {
  once( 1, function () {
    var product_menu = document.getElementById('product_menu');

  });
}

function once (seconds, callback) {
	var counter = 0;
	var time = window.setInterval( function () {
		counter++;
		if ( counter >= seconds ) {
			callback();
			window.clearInterval( time );
		}
	}, 1000 );
}

function myDropdown() {
  var wrapper = document.getElementById('navbar_wrapper');
  var product_menu = document.getElementById('product_menu');

  if (product_menu.style.left == '-100%') {
    slideOut(product_menu, wrapper);
  } else {
    slideBack(product_menu, wrapper);
  }
}

function slideOut(submenu, wrapper) {
  submenu.style.left = '0%';

  // var height = wrapper.offsetHeight;
  // console.log(clientHeight);
  // var newHeight = height + 200;
  // wrapper.style.height = newHeight + 'px';
  // once( 0, function () {
  //   submenu.style.left = '0%';
  //   // submenu.className = 'product_menu_max_end';
  // });
}

function slideBack(submenu, toshow) {
  submenu.style.left = '-100%';
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

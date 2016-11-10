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

  // var height = wrapper.height;
  // console.log(height);
  // var newHeight = height + 200;
  // wrapper.style.height = newHeight + 'px';
  // once( 0, function () {
  //   submenu.style.left = '0%';
  //   // submenu.className = 'product_menu_max_end';
  // });
}

function slideBack(submenu, wrapper) {
  submenu.style.left = '-100%';
  wrapper.style.top = '-80px';
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

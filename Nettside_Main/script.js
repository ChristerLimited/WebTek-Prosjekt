function myDropdown() {
  var items = document.getElementsByClassName('nav_a');
  var product_menu = document.getElementById('product_menu');
  for (var i = 0; i < items.length; i++) {
    items[i].style.display = 'none';
  }

  product_menu.style.display = 'flex';
}

function slideOut(elem) {
	elem.style.maxWidth = '1000px';
	// We're using a timer to set opacity = 0 because setting max-height = 0 doesn't (completely) hide the element.
	elem.style.opacity   = '1';
}

function slideBack(elem) {
	elem.style.maxWidth = '1000px';
	// We're using a timer to set opacity = 0 because setting max-height = 0 doesn't (completely) hide the element.
	elem.style.opacity   = '1';
    alert('something happened')
}

// var sub = document.getElementById("sub_ul");
//    var test = sub.style.display.value;
//    console.log('display: ' + test)
//	if(sub.style.display == 'none') {
//        sub.style.display = 'flex';
//        sub.style.maxHeight = '1000px';
//    } else {
//        sub.style.display = 'none';
//        slideBack(sub);
//    }

function myDropdown() {
	var sub = document.getElementById("sub_ul");
	if(sub.style.display == 'flex') {
  	sub.style.display = 'none';
  } else {
  	sub.style.display = 'flex';
  }
}

console.log('Attached');

function hideMenu(){
	let menuOpen = document.querySelector('.toggler').checked;

	if(menuOpen = true){
		document.querySelector('.toggler').checked = false;
	}
}

window.addEventListener("scroll", hideMenu);
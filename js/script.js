console.log('Attached');

function hideMenu(){
	let menuOpen = document.querySelector('.toggler').checked;
	if(menuOpen = true){
		document.querySelector('.toggler').checked = false;
	}
}

window.addEventListener("scroll", hideMenu);



// Smooth scroll ios
// let viewWorkBtn = document.querySelector('#btn');

// function scrollTo() {
// 	let projectSection = document.querySelector('#projects');
// 	projectSection.scrollIntoView({behavior: "smooth"});

// }
// viewWorkBtn.addEventListener('click', scrollTo);





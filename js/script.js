let project1 = document.querySelector('#project-1');
let project2 = document.querySelector('#project-2');
let project3 = document.querySelector('#project-3');
let project4 = document.querySelector('#project-4');
let project5 = document.querySelector('#project-5');



window.addEventListener('scroll', hideMenu);

project4.addEventListener('click', goToURL);
project4.url = 'http://laravelblogapp.herokuapp.com/';

project5.addEventListener('click', goToURL);
project5.url = 'https://www.facebook.com/ParkInLotPH/';


function goToURL(evt) {
	let url = evt.currentTarget.url;
	window.open(url)
}

function hideMenu(){
	let menuOpen = document.querySelector('.toggler').checked;
	if(menuOpen = true){
		document.querySelector('.toggler').checked = false;
	}
}

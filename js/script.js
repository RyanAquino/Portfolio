const project5 = document.querySelector('#project-5');
const project8 = document.querySelector('#project-8');
const project9 = document.querySelector('#project-9');
const menuLinks = document.querySelectorAll('.menu a');
const viewWorkBtn = document.querySelector('#btn');

// events
viewWorkBtn.addEventListener('click',gotoMenu);
menuLinks.forEach((link) => link.addEventListener('click',gotoMenu));
window.addEventListener('scroll', hideOnScroll);
window.addEventListener('scroll', showProjects);
window.addEventListener('scroll', showSkills);

project9.addEventListener('click', goToURL);
project9.url = 'https://www.extrac.io/';
project5.addEventListener('click', goToURL);
project5.url = 'https://www.facebook.com/ParkInLotPH/';
project8.addEventListener('click', goToURL);
project8.url = 'https://zadala.pages.dev/';


// functions
function gotoMenu(e) {
	e.preventDefault();
	hideOnScroll();
	const section = e.currentTarget.getAttribute('href');

	const targetPos = document.querySelector(section).offsetTop;
	const startPos = window.pageYOffset;
	const distance = targetPos - startPos;
	let start = null;
	const duration = 1000;

	window.requestAnimationFrame(step);

	function step(timestamp){
		if(!start) start = timestamp;
		const progress = timestamp - start;
		window.scrollTo(0, ease(progress, startPos, distance, duration));
		if(progress < duration) {
			window.requestAnimationFrame(step);
		}
	}


	// cubic easing out
	// http://gizma.com/easing
	function ease(t, b, c, d) {
		t /= d;
		t--;
		return c*(t*t*t + 1) + b;
	}
}

function hideOnScroll() {
	const menuOpen = document.querySelector('.toggler').checked;

	if(menuOpen == true){
		document.querySelector('.toggler').checked = false;
	}
}

function goToURL(evt) {
	const url = evt.currentTarget.url;
	window.open(url)
}

function showSkills(){
	const skill1 = document.querySelector('.skill-1');
	const skillsPos = skill1.getBoundingClientRect().top;
	const screenPos = window.innerHeight / 1.7;

	if(skillsPos < screenPos){
		document.querySelector('.skill-1').style.width = '80%';
		document.querySelector('.skill-2').style.width = '90%';
		document.querySelector('.skill-3').style.width = '80%';
		document.querySelector('.skill-4').style.width = '80%';
		document.querySelector('.skill-5').style.width = '80%';
		document.querySelector('.skill-6').style.width = '70%';
		document.querySelector('.skill-7').style.width = '70%';
		document.querySelector('.skill-8').style.width = '50%';
		document.querySelector('.skill-9').style.width = '70%';
	}
}

function showProjects(){
	const projects = document.querySelector('.cards');
	const projectsPos = projects.getBoundingClientRect().top;
	const screenPos = window.innerHeight / 1.5;

	if(projectsPos < screenPos){
		projects.classList.add('cards-appear');
	}
}

let project1 = document.querySelector('#project-1');
let project2 = document.querySelector('#project-2');
let project3 = document.querySelector('#project-3');
let project4 = document.querySelector('#project-4');
let project5 = document.querySelector('#project-5');

window.addEventListener('scroll', hideMenu);
window.addEventListener('scroll', showProjects);
window.addEventListener('scroll', showSkills);

project4.addEventListener('click', goToURL);
project4.url = 'http://laravelblogapp.herokuapp.com/';

project5.addEventListener('click', goToURL);
project5.url = 'https://www.facebook.com/ParkInLotPH/';


function goToURL(evt) {
	let url = evt.currentTarget.url;
	window.open(url)
}

function showSkills(){
	let skill1 = document.querySelector('.skill-1');
	let skill2 = document.querySelector('.skill-2');
	let skill3 = document.querySelector('.skill-3');
	let skill4 = document.querySelector('.skill-4');

	let skillsPos = skill1.getBoundingClientRect().top;
	let screenPos = window.innerHeight / 1.7;

	if(skillsPos < screenPos){
		document.querySelector('.skill-1').style.width = '80%';
		document.querySelector('.skill-2').style.width = '80%';
		document.querySelector('.skill-3').style.width = '80%';
		document.querySelector('.skill-4').style.width = '90%';
		document.querySelector('.skill-5').style.width = '80%';
		document.querySelector('.skill-6').style.width = '70%';
		document.querySelector('.skill-7').style.width = '70%';
		document.querySelector('.skill-8').style.width = '50%';
		document.querySelector('.skill-9').style.width = '70%';
	}
}

function showProjects(){
	let projects = document.querySelector('.cards');
	let projectsPos = projects.getBoundingClientRect().top;
	let screenPos = window.innerHeight / 1.5;

	if(projectsPos < screenPos){
		projects.classList.add('cards-appear');
	}

}

function hideMenu(){
	let menuOpen = document.querySelector('.toggler').checked;

	if(menuOpen = true){
		document.querySelector('.toggler').checked = false;
	}
}

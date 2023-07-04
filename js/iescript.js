"use strict";

var project5 = document.querySelector("#project-5");
var project8 = document.querySelector("#project-8");
var project9 = document.querySelector("#project-9");
var menuLinks = document.querySelectorAll(".menu a");
var viewWorkBtn = document.querySelector("#btn");

if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

// events
viewWorkBtn.addEventListener("click", gotoMenu);
menuLinks.forEach(function (link) {
  return link.addEventListener("click", gotoMenu);
});
window.addEventListener("scroll", hideOnScroll);
window.addEventListener("scroll", showProjects);
window.addEventListener("scroll", showSkills);
project9.addEventListener("click", goToURL);
project9.url = "https://www.extrac.io/";
project5.addEventListener("click", goToURL);
project5.url = "https://www.facebook.com/ParkInLotPH/";
project8.addEventListener("click", goToURL);
project8.url = "https://zadala.pages.dev/";

// functions
function gotoMenu(e) {
  e.preventDefault();
  hideOnScroll();
  var section = e.currentTarget.getAttribute("href");
  var targetPos = document.querySelector(section).offsetTop;
  var startPos = window.pageYOffset;
  var distance = targetPos - startPos;
  var start = null;
  var duration = 1000;
  window.requestAnimationFrame(step);
  function step(timestamp) {
    if (!start) start = timestamp;
    var progress = timestamp - start;
    window.scrollTo(0, ease(progress, startPos, distance, duration));
    if (progress < duration) {
      window.requestAnimationFrame(step);
    }
  }

  // cubic easing out
  // http://gizma.com/easing
  function ease(t, b, c, d) {
    t /= d;
    t--;
    return c * (t * t * t + 1) + b;
  }
}
function hideOnScroll() {
  var menuOpen = document.querySelector(".toggler").checked;
  if (menuOpen == true) {
    document.querySelector(".toggler").checked = false;
  }
}
function goToURL(evt) {
  var url = evt.currentTarget.url;
  window.open(url);
}
function showSkills() {
  var skill1 = document.querySelector(".skill-1");
  var skillsPos = skill1.getBoundingClientRect().top;
  var screenPos = window.innerHeight / 1.7;
  if (skillsPos < screenPos) {
    document.querySelector(".skill-1").style.width = "80%";
    document.querySelector(".skill-2").style.width = "90%";
    document.querySelector(".skill-3").style.width = "80%";
    document.querySelector(".skill-4").style.width = "80%";
    document.querySelector(".skill-5").style.width = "80%";
    document.querySelector(".skill-6").style.width = "70%";
    document.querySelector(".skill-7").style.width = "70%";
    document.querySelector(".skill-8").style.width = "50%";
    document.querySelector(".skill-9").style.width = "70%";
  }
}
function showProjects() {
  var projects = document.querySelector(".cards");
  var projectsPos = projects.getBoundingClientRect().top;
  var screenPos = window.innerHeight / 1.5;
  if (projectsPos < screenPos) {
    projects.classList.add("cards-appear");
  }
}


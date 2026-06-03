const progressBar = document.querySelector(".progress-bar");

window.addEventListener("scroll", () => {

const scroll = document.documentElement.scrollTop;

const height =
document.documentElement.scrollHeight -
document.documentElement.clientHeight;

const progress = (scroll / height) * 100;

progressBar.style.width = progress + "%";

});

const backToTop =
document.getElementById("backToTop");

window.addEventListener("scroll", () => {

if(window.scrollY > 500){

backToTop.style.display = "block";

}else{

backToTop.style.display = "none";

}

});

backToTop.addEventListener("click", () => {

window.scrollTo({
top:0,
behavior:"smooth"
});

});

const accordions =
document.querySelectorAll(".accordion-btn");

accordions.forEach(button => {

button.addEventListener("click", () => {

const content =
button.nextElementSibling;

if(content.style.display === "block"){

content.style.display = "none";

}else{

content.style.display = "block";

}

});

});

const reveals =
document.querySelectorAll("section");

window.addEventListener("scroll", () => {

reveals.forEach(section => {

const top =
section.getBoundingClientRect().top;

if(top < window.innerHeight - 100){

section.classList.add("reveal");
section.classList.add("active");

}

});

});

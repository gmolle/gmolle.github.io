// Variables
const button1 = document.querySelector('.section1');
const button2 = document.querySelector('.section2');
const button3 = document.querySelector('.backTo1');
const project1 = document.querySelector('.toDoList');
const project2 = document.querySelector('.toDoList2');
const project3 = document.querySelector('.toDoList3');
const project4 = document.querySelector('.toDoList4');
const modalBG = document.querySelector('.bg-modal');
const close = document.querySelector('.close');
//////////////////////////////////////////

// Functions
window.onkeydown = function(event) {
    if (event.keyCode == 27) {
        modalBG.style.display = 'none';
    }
};
//////////////////////////////////////////

// Event Listeners
button1.addEventListener('click', () => {
	window.scrollTo(0, 1000);
});

button2.addEventListener('click', () => {
	window.scrollTo(0, 2000);
});

button3.addEventListener('click', () => {
	window.scrollTo(0, 0);
});

project1.addEventListener ('mouseover', () => {
	project1.style.transform = 'scale(1.02)';
	project1.style.transition = '.5s';
});

project1.addEventListener ('mouseout', () => {
	project1.style.transform = 'scale(1)';
	project1.style.transition = '.5s';
});

project2.addEventListener ('mouseover', () => {
	project1.style.transform = 'scale(1.02)';
	project1.style.transition = '.5s';
});

project2.addEventListener ('mouseout', () => {
	project1.style.transform = 'scale(1)';
	project1.style.transition = '.5s';
});

project3.addEventListener ('mouseover', () => {
	project1.style.transform = 'scale(1.02)';
	project1.style.transition = '.5s';
});

project3.addEventListener ('mouseout', () => {
	project1.style.transform = 'scale(1)';
	project1.style.transition = '.5s';
});

project4.addEventListener ('mouseover', () => {
	project1.style.transform = 'scale(1.02)';
	project1.style.transition = '.5s';
});

project4.addEventListener ('mouseout', () => {
	project1.style.transform = 'scale(1)';
	project1.style.transition = '.5s';
});

// Modal Open & Close
project1.addEventListener('click', () => {
	modalBG.style.display = 'flex';
});

project2.addEventListener('click', () => {
	modalBG.style.display = 'flex';
});

project3.addEventListener('click', () => {
	modalBG.style.display = 'flex';
});

project4.addEventListener('click', () => {
	modalBG.style.display = 'flex';
});


close.addEventListener('click', () => {
	modalBG.style.display = 'none';
});

modalBG.addEventListener('click', () => {
	modalBG.style.display = 'none';
});
//////////////////////////////////////////



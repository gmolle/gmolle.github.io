// Variables
const button1 = document.querySelector('.section1');
const button2 = document.querySelector('.section2');
const button3 = document.querySelector('.backTo1');
const modalBG = document.querySelector('.bg-modal');
const close = document.querySelector('.close');
const projects = document.querySelectorAll('.toDoList');
const skills = document.querySelector('.skills');
const main = document.querySelector('.main-content');
const backTo1 = document.querySelector('.backTo1Div')
const projectHeader = document.querySelector('.projectHeader');
//////////////////////////////////////////

// Functions

// Closes modal when you hit ESC
window.onkeydown = function(event) {
    if (event.keyCode == 27) {
        modalBG.style.display = 'none';
    }
};


// Closes modal when you click the modal background
window.onclick = function(e) {
	if (e.target == modalBG) {
		modalBG.style.display = 'none';
	}
}

//////////////////////////////////////////

// Event Listeners
button1.addEventListener('click', () => {
	skills.scrollIntoView(true);
});

button2.addEventListener('click', () => {
	main.scrollIntoView(true);
});

button3.addEventListener('click', () => {
	window.scrollTo(0, 0);
});

for (let i = 0; i < projects.length; i++) {
	projects[i].addEventListener('mouseover', () => {
		projects[i].style.transform = 'scale(1.02)';
		projects[i].style.transition = '.5s';
	});
}

for (let i = 0; i < projects.length; i++) {
	projects[i].addEventListener('mouseout', () => {
		projects[i].style.transform = 'scale(1)';
		projects[i].style.transition = '.5s';
	});
}

// Modal Open & Close
for (let i = 0; i < projects.length; i++) {
	projects[i].addEventListener('click', () => {
		modalBG.style.display = 'flex';
	});
}

close.addEventListener('click', () => {
	modalBG.style.display = 'none';
});
//////////////////////////////////////////

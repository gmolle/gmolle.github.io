// constiables
const button1 = document.querySelector('.section1');
const button2 = document.querySelector('.section2');
const button3 = document.querySelector('.backTo1');
const modalBG = document.querySelector('.bg-modal');
const modalBG2 = document.querySelector('.bg-modal2');
const close = document.querySelector('.close');
const close2 = document.querySelector('.close2');
const projects = document.querySelectorAll('.toDoList');
const recipe = document.querySelector('.recipeImg');
const skills = document.querySelector('.skills');
const main = document.querySelector('.main-content');
const backTo1 = document.querySelector('.backTo1Div')
const projectHeader = document.querySelector('.projectHeader');
const scrollDown = document.querySelector('.scrollDown');
const scrollDown2 = document.querySelector('.scrollDown2');
const scrollUp = document.querySelector('.scrollUp');

const nav1 = document.querySelector('.nav1');
const nav2 = document.querySelector('.nav2');
const nav3 = document.querySelector('.nav3');
//////////////////////////////////////////

// Functions

nav2.addEventListener('click', () => {
	nav2.classList.toggle('active');
	nav1.classList.remove('active');
})

//////////////////////////////////////////

// Event Listeners //

// Scroll Button Events
button1.addEventListener('click', () => {
	skills.scrollIntoView(true);
});

button2.addEventListener('click', () => {
	skills.scrollIntoView(true);
});

button3.addEventListener('click', () => {
	window.scrollTo(0, 0);
});

button1.addEventListener('mouseover', () => {
	button1.style.display = 'none';
	scrollDown.style.display = 'block';
});

button2.addEventListener('mouseover', () => {
	button2.style.display = 'none';
	scrollDown2.style.display = 'block';
});

button3.addEventListener('mouseover', () => {
	button3.style.display = 'none';
	scrollUp.style.display = 'inline-block';
});

scrollDown.addEventListener('mouseout', () => {
	button1.style.display = 'block';
	scrollDown.style.display = 'none';
});

scrollDown.addEventListener('click', () => {
	skills.scrollIntoView(true);
});

scrollDown2.addEventListener('mouseout', () => {
	button2.style.display = 'block';
	scrollDown2.style.display = 'none';
});

scrollDown2.addEventListener('click', () => {
	projectHeader.scrollIntoView(true);
});

scrollUp.addEventListener('mouseout', () => {
	button3.style.display = 'inline-block';
	scrollUp.style.display = 'none';
});

scrollUp.addEventListener('click', () => {
	window.scrollTo(0, 0);
});

//////////////////////////////////////////


// Project zoom on hover animations
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

recipe.addEventListener('mouseover', () => {
	recipe.style.transform = 'scale(1.02)';
	recipe.style.transition = '.5s';
});

recipe.addEventListener('mouseout', () => {
	recipe.style.transform = 'scale(1)';
	recipe.style.transition = '.5s';
});



//////////////////////////////////////////



// Side nav bar color changes on scroll
$(window).scroll(function () {
	var scrollPos = $(window).scrollTop(),
		navH = $('.navbar').height();
	$('.sections').each(function (i) {
		var offT = $(this).offset().top;
		if ((offT - scrollPos - navH) <= 0) {
			$('.activeLink').removeClass('activeLink')
			$('.navbar a').eq(i).addClass('activeLink')
		}
	})
});



//////////////////////////////////////////

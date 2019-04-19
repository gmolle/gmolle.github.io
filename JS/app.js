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
const nav1 = document.querySelector('#nav1');
const nav2 = document.querySelector('#nav2');
const nav3 = document.querySelector('#nav3');
const navMenu = document.querySelector('.nav-menu');
const verticalMenu = document.querySelector('.vertical-menu');
const navClose = document.querySelector('.closeNav');

const nav1Open = document.querySelector('#nav1.open');
const nav2Open = document.querySelector('#nav2.open');
const nav3Open = document.querySelector('#nav3.open');

const navs = document.querySelectorAll('navI');

//////////////////////////////////////////

// Functions

// Closes modal when you hit ESC
window.onkeydown = function (event) {
	if (event.keyCode == 27) {
		modalBG.style.display = 'none';
		modalBG2.style.display = 'none';
	}
};


// Closes modal when you click the modal background
window.onclick = function (e) {
	if (e.target == modalBG || e.target == modalBG2) {
		modalBG.style.display = 'none';
		modalBG2.style.display = 'none';
	}
}

//////////////////////////////////////////

// Event Listeners //

// Scroll Button Events
button1.addEventListener('click', () => {
	skills.scrollIntoView(true);
});

nav1.addEventListener('click', () => {
	window.scrollTo(0, 0);
});

button2.addEventListener('click', () => {
	skills.scrollIntoView(true);
});

nav2.addEventListener('click', () => {
	skills.scrollIntoView(true);
});

button3.addEventListener('click', () => {
	window.scrollTo(0, 0);
});

nav3.addEventListener('click', () => {
	projectHeader.scrollIntoView(true);
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

// Modal Open & Close
for (let i = 0; i < projects.length; i++) {
	projects[i].addEventListener('click', () => {
		modalBG.style.display = 'flex';
	});
}

recipe.addEventListener('click', () => {
	modalBG2.style.display = 'flex';
});


close.addEventListener('click', () => {
	modalBG.style.display = 'none';
});

close2.addEventListener('click', () => {
	modalBG2.style.display = 'none';
});

//////////////////////////////////////////

// Side nav bar color changes on scroll
$(window).scroll(function () {
	var scrollPos = $(window).scrollTop(),
		navH = $('.vertical-menu').height();
	$('.sections').each(function (i) {
		var offT = $(this).offset().top;
		if ((offT - scrollPos - navH) <= 0) {
			$('.active').removeClass('active')
			$('.vertical-menu a').eq(i).addClass('active')
		}
	})
});


//////////////////////////////////////////

// Mobile Nav Bar

const navBar = () => {
	verticalMenu.classList.toggle("open");
	nav1.classList.toggle("open");
	nav2.classList.toggle("open");
	nav3.classList.toggle("open");
}

navMenu.addEventListener('click', () => {
	navBar();
	navMenu.style.display = 'none';
});

navClose.addEventListener('click', () => {
	navBar();
	navMenu.style.display = 'block';
});

nav1.addEventListener('click', () => {
	if (nav1.classList.contains("open")) {
		navBar();
		navMenu.style.display = 'block';
	}
})

nav2.addEventListener('click', () => {
	if (nav2.classList.contains("open")) {
		navBar();
		navMenu.style.display = 'block';
	}
})

nav3.addEventListener('click', () => {
	if (nav3.classList.contains("open")) {
		navBar();
		navMenu.style.display = 'block';
	}
})

// for(let i = 0; i < navs.lenghth; i++) {
// 	navs[i].addEventListener('click', () => {
// 		navBar();
// 	});
// }

//////////////////////////////////////////
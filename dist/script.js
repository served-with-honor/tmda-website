// document.querySelector('#btnHamburger').click(function() {
// 	console.log('hamburger click');
// 	document.querySelector('header').classList.toggle('nav-open');
// });

// document.addEventListener('click', e => {
// 	const isDropdownButton = e.target.matches("[data-dropdown-button]")
// 	if (!isDropdownButton && e.target.closest('[data-dropdown]') != null) return

// 	let currentDropdown
// 	if (isDropdownButton) {
// 		currentDropdown = e.target.closest('[data-dropdown]')
// 		currentDropdown.classList.toggle('active')
// 	}

// 	document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
// 		if (dropdown === currentDropdown) return
// 		dropdown.classList.remove('active')
// 	})
// });

const observer = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		if(entry.isIntersecting) {
			setTimeout(() => { document.querySelectorAll(".fadedw")[0].classList.add("visible")}, 0);
			setTimeout(() => { document.querySelectorAll(".fadedw")[1].classList.add("visible")}, 500);
			setTimeout(() => { document.querySelectorAll(".fadedw")[2].classList.add("visible")}, 700);
			setTimeout(() => { document.querySelectorAll(".fadedw")[3].classList.add("visible")}, 900);
		}
	})
})

observer.observe(document.querySelector(".threeColCTA"));

const observer2 = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		if(entry.isIntersecting) {
			//document.querySelectorAll(".fade")[0].classList.add("visible");
			//document.querySelectorAll(".fade")[1].classList.add("visible");
			//document.querySelectorAll(".fade")[2].classList.add("visible");
			//document.querySelectorAll(".fade")[3].classList.add("visible");
			setTimeout(() => { document.querySelectorAll(".fadeRL")[0].classList.add("visible")}, 0);
			setTimeout(() => { document.querySelectorAll(".fadeRL")[1].classList.add("visible")}, 500);
			setTimeout(() => { document.querySelectorAll(".fadeRL")[2].classList.add("visible")}, 800);
			setTimeout(() => { document.querySelectorAll(".fadeRL")[3].classList.add("visible")}, 1100);
			setTimeout(() => { document.querySelectorAll(".fadeRL")[4].classList.add("visible")}, 1400);
		}
	})
})

observer2.observe(document.querySelector(".twoCol"));

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
	acc[i].addEventListener("click", function() {
	  this.classList.toggle("active");
	  var panel = this.nextElementSibling;
	  if (panel.style.maxHeight) {
		panel.style.maxHeight = null;
	  } else {
		panel.style.maxHeight = panel.scrollHeight + "px";
	  }
	});
  }
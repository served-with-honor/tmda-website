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

// console.log('HELLO WORLD MY TEST');

// const test = () => {
// 	console.log('this is a test');
// };
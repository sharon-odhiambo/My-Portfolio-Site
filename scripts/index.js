const hamburgerButton = document.querySelector('.menu-button');
const navButton = document.querySelector('.mobile-nav-menu');
const exitButton = document.querySelector('.exit-btn');
const navOptions = document.querySelectorAll('.mobile-nav-link');
const headSection = document.querySelector('.overlay');
// Open Menu Bar
hamburgerButton.addEventListener('click', () => {
  navButton.style.display = ('block');
  exitButton.style.display = ('block');
  headSection.style.display = ('block');
  hamburgerButton.style.display = ('none');
});
// Close Menu Bar
exitButton.addEventListener('click', () => {
  navButton.style.display = ('none');
  exitButton.style.display = ('none');
  headSection.style.display = ('none');
  hamburgerButton.style.display = ('block');
});
// Close Menu Bar Using navOptions
navOptions.forEach((navOption) => {
  navOption.addEventListener('click', () => {
    navButton.style.display = ('none');
    exitButton.style.display = ('none');
    headSection.style.display = ('none');
    hamburgerButton.style.display = ('block');
  });
});
// Create Form Validation
const getInTouch = document.getElementById('form');
const email = getInTouch.elements['mail'].value;
const error = getInTouch.elements['error-message'];
getInTouch.addEventListener('submit', (event) => {
  if (email !== email.toLowerCase()) {
    error.textMessage = 'Sorry! Please use all lowercase.';
    error.style.color = 'red';
    event.preventDefault();
  };
});
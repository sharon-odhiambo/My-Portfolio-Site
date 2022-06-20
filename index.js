const hamburgerButton = document.querySelector('.menu-button');
const navButton = document.querySelector('.mobile-nav-menu');
const exitButton = document.querySelector('.exit-btn');
const navOptions = document.querySelectorAll('.mobile-nav-link');
const headSection = document.querySelector('.header-background')
// Open Menu Bar
hamburgerButton.addEventListener('click', () => {
  navButton.style.display = ('block');
  exitButton.style.display = ('block');
  headSection.style.backgroundColor = ('#6070ff');
});
// Close Menu Bar
exitButton.addEventListener('click', () => {
    navButton.style.display = ('none');
    exitButton.style.display = ('none');
    headSection.style.backgroundColor = ('#ffffff');
});
// navOptions.addEventListener('click' () => {
//     navButton.style.display = ('none');
// });
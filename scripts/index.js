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
const button = document.getElementById('form');
const email = document.getElementById('mail');
const error = document.getElementById('error-message');
button.addEventListener('submit', (event) => {
  const Email = email.value;
  const newString = (str) => /^[a-z0-9@.]+$/.test(str) && !/[A-Z]/.test(str);
  if (!newString(Email)) {
    error.innerHTML = 'Sorry! Please use all lowercase.';
    error.style.color = 'red';
    event.preventDefault();
    setTimeout(() => {
      error.textContent = "Let's go again";
    }, 5000);
  }
});
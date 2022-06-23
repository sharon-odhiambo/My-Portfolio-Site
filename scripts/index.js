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
const button = document.getElementById('#form');
const email = document.getElementById('#mail');
const error = document.getElementById('#error-message');
function inputCheck() {
  const Email = email.value;
  const newString = (str) => /^[a-z0-9@.]+$/.test(str) && !/[A-Z]/.test(str);
  if (!newString(Email)) {
    error.innerHTML = 'Sorry! Please use all lowercase.';
    error.style.color = 'red';
  }
};
button.addEventListener('submit', (event) => {
  event.preventDefault();
  inputCheck();
});

// getInTouch.addEventListener('submit', (event) => {
//   const formRequired = /^[a-z0-9@.]+$/;
// if (!formRequired.test(email.value)) {
//   error.innerHTML = 'Sorry! Please use all lowercase.';
//   error.style.color = 'red';
//   event.preventDefault();
// }
// });

// const form = document.querySelector(‘#form’);
// const email = document.querySelector(‘#mail’);
// const errorHolder = document.querySelector(‘#error-message’);
// function inputCheck() {
//   // Get the values from the inputs
//   const userEmail = email.value.trim();
//   const isLowerCase = (str) => /[a-z]/.test(str) && !/[A-Z]/.test(str); if (!isLowerCase(userEmail)) {
//     // show error
//     // add error class
//     errorHolder.innerText = ‘Invalid Email! Emails must be written with lowercase characters.’;
//   }
// }
// form.addEventListener(‘submit’, (e) => {
//   e.preventDefault();
//   inputCheck();
// });


// // const newString = (str) => str == str.toLowerCase()
// // document.querySelector('.submit').addEventListener('click', (event) => {
// //   if (!newString(email)) {
// //     event.preventDefault();
// //     error.textMessage = 'Sorry! Please use all lowercase.';
// //     error.style.color = 'red';
// //   };
// // });

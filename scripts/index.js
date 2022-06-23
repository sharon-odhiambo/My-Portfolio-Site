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
//Works-Porjects popup-window
const worksection = [
  {
  id: 1,
  title: 'Tonic',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  featuredImage: './images/SnapshootPortfolio.svg',
  altmessage: 'Tonic-project',
  projects_overview: ['CANOPY', 'Full Stack Dev', '2022'],
  technoligies: ['html', 'css', 'javaScript'],
  seeLive: 'https://sharon-odhiambo.github.io/',
  seeSource: 'https://github.com/sharon-odhiambo/My-Portfolio-Site',
  },
  {
    id: 2,
    title: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featuredImage: './images/SnapshootPortfolio1.svg',
    altMessage: 'Multi-Post stories project',
    projects_overview: ['CANOPY', 'Full Stack Dev', '2022'],
    technoligies: ['html', 'css', 'javaScript'],
    seeLive: 'https://sharon-odhiambo.github.io/',
    seeSource: 'https://github.com/sharon-odhiambo/My-Portfolio-Site',
  },
  {
  id: 3,
  title: 'Tonic',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  featuredImage: './images/SnapshootPortfolio2.svg',
  altMessage: 'Tonic-project',
  projects_overview: ['CANOPY', 'Full Stack Dev', '2022'],
  technoligies: ['html', 'css', 'javaScript'],
  seeLive: 'https://sharon-odhiambo.github.io/',
  seeSource: 'https://github.com/sharon-odhiambo/My-Portfolio-Site',
  },
  {
    id: 4,
    title: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featuredImage: './images/SnapshootPortfolio3.svg',
    altMessage: 'Multi-Post stories-project',
    projects_overview: ['CANOPY', 'Full Stack Dev', '2022'],
    technoligies: ['html', 'css', 'javaScript'],
    seeLive: 'https://sharon-odhiambo.github.io/',
    seeSource: 'https://github.com/sharon-odhiambo/My-Portfolio-Site',
  }
];
// Create Works Section
function createWorks(worksection) {
  console.log('Sharon');
  const workSection = document.querySelector('#works-sect');
  for(i = 0; i < worksection.length; i++) {
    const doc = `
    <div class="works-project">
    <div class="works-top">
    <div class="snapshoot-${worksection[i].id}"></div>
    </div>
    <div class="project-info">
    <h2>${worksection[i].title}</h2>
    <ul class="project-details">
        <li>${worksection[i].projects_overview[0]}</li>
        <li>${worksection[i].projects_overview[1]}</li>
        <li>${worksection[i].projects_overview[2]}</li>
    </ul>
    <div>
      <p>${worksection[i].description}.</p>
    </div>
    <div>
    <ul class="languages">
      <li>${worksection[i].technoligies[0]}</li>
      <li>${worksection[i].technoligies[1]}</li>
      <li>${worksection[i].technoligies[2]}</li>
    </ul>
    </div>
    <button type="button" class="button" id="btnSeeProject${worksection[i].id}"><span>See Project ${worksection[i].id}</span></button>
  </div>
  </div>`;
  workSection.innerHTML += doc;
  }
}
// const popupButton = document.getElementById('popup');
document.addEventListener('DomContentLoaded', createWorks(worksection));
// // Create Popup window
// const Popup = document.querySelector('#mobile-popup');
// const openPopups = document.querySelectorAll('.button');
// const closeButton = document.querySelector('#close-popup');
// // Open Popup Window
// openPopups.forEach((openPopup) => {
//   openPopup.addEventListener('click', () => {
//     button.addEventListener('click', () => {
//       document.body.style.position = 'fixed';
//       document.body.style.overflow = 'hidden';
//       popUpWindow.classList.remove('hide');
//   });
// });
// });
// // Close Popup Window
// closeButton.addEventListener('click', () => {
//   button.addEventListener('click', () => {
//     document.body.style.position = 'relative';
//     document.body.style.overflow = 'scroll';
//     popUpWindow.classList.add('hide');
//     // hamburgerButton.style.position = 'absolute';
//     hamburgerButton.style.top = '0';
//     hamburgerButton.style.margin = '45px 0 0 0';
//   });
// });
const popUpWindow = document.querySelector('.mobile-popup');
const seeProject = document.querySelectorAll('.button');
seeProject.forEach((button) => {
  button.addEventListener('click', () => {
    document.body.style.position = 'fixed';
    document.body.style.overflow = 'hidden';
    popUpWindow.classList.remove('hide');
  });
});
const closePopup = document.querySelectorAll('#close-popup');
closePopup.forEach((button) => {
  button.addEventListener('click', () => {
    document.body.style.position = 'relative';
    document.body.style.overflow = 'scroll';
    popUpWindow.classList.add('hide');
    // hamburgerButton.style.position = 'absolute';
    hamburgerButton.style.top = '0';
    hamburgerButton.style.margin = '45px 0 0 0';
  });
});
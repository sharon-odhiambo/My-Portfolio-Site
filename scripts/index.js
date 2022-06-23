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
// Works-Projects popup-window
const workSection = [
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
    projectsOverview: ['CANOPY', 'Full Stack Dev', '2022'],
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
    projectsOverview: ['CANOPY', 'Full Stack Dev', '2022'],
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
    projectsOverview: ['CANOPY', 'Full Stack Dev', '2022'],
    technoligies: ['html', 'css', 'javaScript'],
    seeLive: 'https://sharon-odhiambo.github.io/',
    seeSource: 'https://github.com/sharon-odhiambo/My-Portfolio-Site',
  },
];
// // Create Works Section
// function createWorks(myArray) {
//   console.log('Sharon');
//   const workSection = document.querySelector('#works-sect');
//   for(i = 0; i < myArray.length; i++) {
//     const doc = `
//     <div class="works-project">
//     <div class="works-top">
//     <div class="snapshoot-one"></div>
//     </div>
//     <div class="project-info">
//     <h2>Tonic</h2>
//     <ul class="project-details">
//         <li>Canopy</li>
//         <li>BackEnd Dev</li>
//         <li>2015</li>
//     </ul>
//     <div>
//       <p>A daily selection of privately personalized reads; no accounts or sign-ups required.</p>
//     </div>
//     <div>
//     <ul class="languages">
//       <li>html</li>
//       <li>css</li>
//       <li>javascript</li>
//     </ul>
//     </div>
//     <button type="button" class="button"><span>See Project</span></button>
//   </div>
//   </div>`;
//   workSection += doc;
//   }
// }
// const popupButton = document.getElementById('popup');
// popupButton.addEventListener('click', createWorks(worksection));

const popUpWindow = document.querySelector('.mobile-popup');
function popUp(index) {
  popUpWindow.classList.add('popUp');
  document.querySelector('#popup-header').innerHTML = projects[index].id;
  document.querySelector('#popup-header').innerHTML = projects[index].title;
  document.querySelector('#popup-description').innerHTML = projects[index].description;
  document.querySelector('#popup-image').src = `${projects[index].featuredImage}`;
  document.querySelector('#popup-image-alt').innerHTML = projects[index].altMessage;
  document.querySelector('#popup-overview').innerHTML = projects[index].projectsOverview;
  document.querySelector('#popup-technologies').innerHTML = projects[index].technologies;
  document.querySelector('#seeLivePopup').href = projects[index].seeLive;
  document.querySelector('#seeSourcePopup').href = projects[index].seeSource;
}

// const popUpWindow = document.querySelector('.popup-window');
// function popUp(index) {
//   popUpWindow.classList.add('popUp');
//   document.querySelector('#popup-header').innerHTML = projects[index].id;
//   document.querySelector('#popup-header').innerHTML = projects[index].title;
//   document.querySelector('#popup-description').innerHTML = projects[index].description;
//   document.querySelector('#popup-image').src = `${projects[index].featuredImage}`;
//   document.querySelector('#popup-image-alt').innerHTML = projects[index].altMessage;
//   document.querySelector('#popup-overview').innerHTML = projects[index].projectsOverview;
//   document.querySelector('#popup-technologies').innerHTML = projects[index].technologies;
//   document.querySelector('#seeLivePopup').href = projects[index].seeLive;
//   document.querySelector('#seeSourcePopup').href = projects[index].seeSource;
// }
// function popUpClose() {
//   popUpWindow.classList.remove('popUp');
// }
// const closePopUpWindow = document.querySelector('#closePopup');
// closePopUpWindow.addEventListener('click', popUpClose);
// const seeProject = document.querySelectorAll('.button');
// seeProject.forEach((element) => {
//   element.addEventListener('click', () => {
//     popUp(element.dataset.id);
//   });
// });
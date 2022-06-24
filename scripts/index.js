const hamburgerButton = document.querySelector('.menu-button');
const navButton = document.querySelector('.mobile-nav-menu');
const exitButton = document.querySelector('.exit-btn');
const navOptions = document.querySelectorAll('.mobile-nav-link');
const headSection = document.querySelector('.overlay');
const poupPage = document.querySelector('.popup-overlay');
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

// Works-Projects popup-window
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
  },
];
// Create Works Section
function createWorks(worksection) {
  const workSection = document.querySelector('#works-sect');
  for (let i = 0; i < worksection.length; i += 1) {
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
    <button type="button" class="button" id="btnSeeProject${worksection[i].id}"><span>See Project</span></button>
  </div>
  </div>`;
    workSection.innerHTML += doc;
  }
}
// const popupButton = document.getElementById('popup');
document.addEventListener('DomContentLoaded', createWorks(worksection));
// Create Popup Window
const popUpWindow = document.querySelector('.mobile-popup');
const seeProject = document.querySelectorAll('.button');
const higherPage = document.querySelector('.headline-content');
const worksUp = document.querySelector('.works-sect');
// Open Popup
seeProject.forEach((button) => {
  button.addEventListener('click', () => {
    document.body.style.position = 'fixed';
    document.body.style.overflow = 'hidden';
    popUpWindow.classList.remove('hide');
    poupPage.style.display = ('block');
    hamburgerButton.style.display = 'none';
    headSection.style.display = 'none';
    higherPage.style.display = 'none';
    worksUp.style.display = 'none';
  });
});
const closePopup = document.querySelectorAll('#close-popup');
closePopup.forEach((button) => {
  button.addEventListener('click', () => {
    document.body.style.position = 'relative';
    document.body.style.overflow = 'scroll';
    popUpWindow.classList.add('hide');
    hamburgerButton.style.position = 'absolute';
    hamburgerButton.style.top = '0';
    hamburgerButton.style.margin = '45px 0 0 0';
    poupPage.style.display = ('none');
    hamburgerButton.style.display = 'block';
    headSection.style.display = 'none';
    higherPage.style.display = 'block';
    worksUp.style.display = 'block';
  });
});
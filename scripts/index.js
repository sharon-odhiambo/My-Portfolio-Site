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

// Grab the parent container from the html body
const projectContainer = document.querySelector('.popUp');
for (let card = 0; card < workSection.length; card += 1) {
  const projectCard = document.createElement('div');
  const projectInfo = document.createElement('div');
  const heading = document.createElement('h2');
  //const skills = document.createElement('ul');

  // // project overview
  // const [canopy, fullStack, date] = workSection[card].projectsOverview;
  // let overView;
  // for (let list = 0; list < 3; list += 1) {
  //   overView = document.createElement('li');
  //   if (list === 0) {
  //     overView.textContent = canopy;
  //   } else if (list === 1) {
  //     overView.textContent = fullStack;
  //   } else if (list === 2) {
  //     overView.textContent = date;
  //   }
  // }

  //skills.appendChild(overView);
  //skills.className = 'project-details';
  projectInfo.append(heading, skills);
  projectInfo.className = 'project-info';
  if (card === 1 || card === 3) {
    heading.textContent = workSection[1].title;
    projectCard.classList = 'works-project-one';
  } else {
    heading.textContent = workSection[0].title;
    projectCard.classList = 'works-project';
  }
  const worksTop = document.createElement('div');
  worksTop.className = 'works-top';
  const snapShot = document.createElement('div');
  if (card === 0) {
    snapShot.className = 'snapshoot-one';
  } else if (card === 1) {
    snapShot.className = 'snapshoot-two';
  } else if (card === 2) {
    snapShot.className = 'snapshoot-three';
  } else if (card === 3) {
    snapShot.className = 'snapshoot-four';
  }

  worksTop.appendChild(snapShot);
  projectCard.append(worksTop, projectInfo);
  projectContainer.appendChild(projectCard);
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
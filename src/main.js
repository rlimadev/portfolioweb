import { TweenMax, Back, Power4, Expo } from 'gsap';

TweenMax.set('body', { visibility: 'visible' });

TweenMax.from('.navigation', 1.2, {
  opacity: 0,
  delay: 1.2,
});

const meImg = document.getElementById('intro_text');

const init = () => {
  if (meImg === null) { return; }

  TweenMax.set(meImg, { transformStyle: 'preserve-3d' });
  TweenMax.set(meImg, { perpective: 800 });

  meImg.addEventListener('mousemove', (e) => {
    console.log('mouseover');
    /* eslint-disable */
    const posX = e.pageX / 1000 * 100 - 100;
    const posY = e.pageX / 1000 * 100 - 100;
    /* eslint-enable */
    TweenMax.to(meImg, 2, {
      rotationX: 0.03 * posX,
      rotationY: -0.03 * posY,
      transformPerspective: 500,
      transformOrigin: 'center center -10',
      ease: Expo.easeOut,
    });
  });
};

TweenMax.from('.profile_description', 1.2, {
  x: 30,
  rotationX: -45,
  rotationY: 40,
  opacity: 0,
  ease: Power4.easeOut,
  delay: 0.8,
});

TweenMax.from('.me', 1.2, {
  rotationX: -45,
  rotationY: 40,
  ease: Back.easeOut,
  opacity: 0,
  delay: 0.6,
  onComplete: init,
});


// bread and title

const bread = document.getElementById('bread');
const titleport = document.getElementById('titleh1');


const initTitle = () => {
  if (titleport === null) { return; }
  TweenMax.from(bread, 1.2, {
    x: -30,
    rotationX: -45,
    rotationY: 40,
    opacity: 0,
    delay: 0.8,
  });

  TweenMax.from(titleport, 1.2, {
    x: -30,
    rotationX: -45,
    rotationY: 40,
    opacity: 0,
    delay: 1.2,
  });
};

initTitle();


// Portfólio

const initPortfolio = () => {
  const data = ['m1', 'm2', 'm3', 'm4', 'm5', 'm6', 'm7', 'back'];
  const elements = data.map(item => document.getElementById(item));
  if (elements[0] === null) { return; }

  TweenMax.staggerFrom(elements, 1, {
    rotationX: -45,
    rotationY: 40,
    opacity: 0,
    delay: 1.4,
  }, 0.1);
};

initPortfolio();


// Resume

const initResume = () => {
  const contentResume = document.getElementById('contentResume');
  if (contentResume === null) { return; }

  TweenMax.set(contentResume, { transformStyle: 'preserve-3d' });
  TweenMax.set(contentResume, { perpective: 800 });

  TweenMax.from(contentResume, 1, {
    rotationX: 45,
    opacity: 0,
    delay: 1.4,
  }, 0.1);
};

initResume();

// Contact

const initContact = () => {
  const dataContact = ['cemail1', 'cemail2', 'cemail3', 'cemail4', 'cemail5'];
  const svgContact = ['s1', 's2', 's3', 's4', 'back'];

  const elemContact = dataContact.map(item => document.getElementById(item));
  const elemSvgContact = svgContact.map(item => document.getElementById(item));

  if (elemContact[0] === null || elemSvgContact[0] === null) { return; }

  TweenMax.staggerFrom(elemContact, 1, {
    rotationX: -45,
    rotationY: 40,
    opacity: 0,
    delay: 1.4,
  }, 0.1);

  TweenMax.staggerFrom(elemSvgContact, 1, {
    rotationX: -45,
    rotationY: 40,
    opacity: 0,
    delay: 1.8,
  }, 0.1);
};

initContact();

// mobile menu

const nav = document.getElementById('navigation');

const openMobileMenu = () => {
  console.log('click');
  if (nav.className === 'navigation') {
    nav.className += ' mobilemenu';
    document.getElementById('3line').innerHTML = '&Cross;';
  } else {
    nav.className = 'navigation';
    document.getElementById('3line').innerHTML = '&#9776;';
  }
};

nav.addEventListener('click', openMobileMenu);

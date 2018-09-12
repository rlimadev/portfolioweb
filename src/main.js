import { TweenMax, Back, Power4, Expo } from 'gsap';

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
  clip: 'rect(0px 100px 100px 100px)',
  ease: Back.easeOut,
  opacity: 0,
  delay: 0.6,
});

TweenMax.from('.navigation', 1.2, {
  opacity: 0,
  delay: 1.2,
});

const meImg = document.getElementById('intro_text');

const init = () => {
  TweenMax.set(meImg, { transformStyle: 'preserve-3d' });
  TweenMax.set(meImg, { perpective: 800 });

  meImg.addEventListener('mousemove', (e) => {
    console.log('mouseover');
    const posX = e.pageX / 1000 * 100 - 100;
    const posY = e.pageX / 1000 * 100 - 100;
    TweenMax.to(meImg, 2, {
      rotationX: 0.03 * posX,
      rotationY: -0.03 * posY,
      transformPerspective: 500,
      transformOrigin: 'center center -10',
      ease: Expo.easeOut,
    });
  });
};

init();

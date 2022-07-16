import faviconICO from './assets/images/favicon.ico';
import faviconPNG from './assets/images/favicon.png';
import App from './app';
import './assets/scss/main.scss';
import sal from 'sal.js';
import ScrollOut from 'scroll-out';

const app = () => {
  document.querySelector('#root').appendChild(App());
};

app();

// Declaring variables
const header = document.querySelector('#header');
const hamburger = document.querySelector('.hamburger');
let hamburgerOpen = true;
const nav = document.querySelector('.nav-links');
const navList = document.querySelectorAll('.nav-links li');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');
const indexSection = document.querySelector('#index');

// adding scroll-padding-top
document.documentElement.style.setProperty(
  '--scroll-padding',
  header.offsetHeight + 50 + 'px'
);

// adding backgroun color on header when scroll
window.addEventListener('scroll', () => {
  window.scrollY > 10
    ? header.classList.add('header-bg')
    : header.classList.remove('header-bg');

  // detect what section is on the screen
  sections.forEach(section => {
    const position = section.getBoundingClientRect();

    if (window.scrollY > indexSection.offsetTop + indexSection.offsetHeight) {
      if (position.top < window.innerHeight && position.bottom >= 0) {
        const id = section.getAttribute('id');
        const activeLink = document.querySelector(`a[href="#${id}"]`);
        navLinks.forEach(navLink => navLink.classList.remove('nav-active'));
        activeLink.classList.add('nav-active');
      }
    } else {
      navLinks.forEach(navLink => navLink.classList.remove('nav-active'));
    }
  });
});

// hamburger menu
if (hamburger) {
  hamburger.addEventListener('click', () => {
    if (hamburgerOpen) {
      hamburger.classList.add('is-active');
      nav.classList.add('open');
      navList.forEach(list => {
        list.classList.add('move');
        list.addEventListener('click', () => {
          hamburger.classList.remove('is-active');
          document.body.classList.remove('no-scroll');
          nav.classList.remove('open');
          hamburgerOpen = true;
        });
      });
      document.body.classList.add('no-scroll');
      hamburgerOpen = false;
    } else {
      hamburger.classList.remove('is-active');
      nav.classList.remove('open');
      navList.forEach(list => list.classList.remove('move'));
      document.body.classList.remove('no-scroll');
      hamburgerOpen = true;
    }
  });
}

sal();
ScrollOut({
  once: true,
});

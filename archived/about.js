const hamburger = document.getElementById('hamburger');
const navMobile = document.querySelector('.nav-mobile');
const overlay = document.querySelector('.overlay');
const navLinksMobile = document.querySelectorAll('.nav-links-mobile');

hamburger.addEventListener('click', () => {
  navMobile.classList.toggle('nav-mobile-visible');
  overlay.classList.toggle('visible');
});

document.addEventListener('click', (event) => {
  const isClickInsideNavbar = navMobile.contains(event.target) || hamburger.contains(event.target);

  if (!isClickInsideNavbar && overlay.classList.contains('visible')) {
    navMobile.classList.remove('nav-mobile-visible');
    overlay.classList.remove('visible');
  }
});

navLinksMobile.forEach((link) => {
  link.addEventListener('click', () => {
    navMobile.classList.remove('nav-mobile-visible');
    overlay.classList.remove('visible');
  });
});

overlay.addEventListener('transitionend', () => {
  if (overlay.classList.contains('visible')) {
    hamburger.classList.add('visible');
  } else {
    hamburger.classList.remove('visible');
  }
});

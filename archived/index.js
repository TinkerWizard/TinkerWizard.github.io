const device = document.querySelector('.device');
const text = document.querySelector('.text-content');

const resizeObserver = new ResizeObserver(entries => {
  for (let entry of entries) {
    const { width, height } = entry.contentRect;
    updateTextContent(width, height);
  }
});

function updateTextContent(width, height) {
  if (width <= 200 && height <= 400) {
    text.textContent = "";
  } else if (width <= 300 && height <= 500) {
    text.textContent = "";
  } 
  else {
    text.textContent = "Ummm, which means I'm a UX/UI Designer";
  }
}

resizeObserver.observe(device);

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

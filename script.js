const navbarToggleButton = document.querySelector('.navbar-toggle-button');
const navbar = document.querySelector('.navbar');
const navbarLinks = document.querySelector('.navbar-links');

navbarToggleButton.addEventListener('click', function () {
  const navbarHeight = navbar.getBoundingClientRect().height;
  const navbarLinksHeight = navbarLinks.getBoundingClientRect().height;
  if (!navbarHeight) {
    navbar.style.height = `${navbarLinksHeight}px`;
  } else {
    navbar.style.height = 0;
  }
});

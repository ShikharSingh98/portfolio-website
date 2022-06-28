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

//Typing Effect

const headerIconText = document.querySelector('.header-icon-text');

const text = './Shikhar';
let showText = '';
let index = 0;

const intervalID = setInterval(function () {
  if (index < text.length) {
    showText += text.charAt(index);
    headerIconText.textContent = `${showText}`;
    index++;
  } else {
    clearInterval(intervalID);
  }
}, 50);

const navbar = document.querySelector('.navbar');
const home = document.querySelector('.home');

if (window.scrollY >= 165) {
    navbar.classList.add('navbar-float')
    home.classList.add('home-nav')
} else {
    navbar.classList.remove('navbar-float')
    home.classList.remove('home-nav')
};
window.onscroll = function() { fixedNavbar() };

var navbar = document.getElementById('navbar');
var fixedTop = navbar.offsetTop;

function fixedNavbar() {
    if (window.pageYOffset >= fixedTop) {
        navbar.classList.remove('absolute-navbar');
        navbar.classList.add('fixed-navbar');
    } else {
        navbar.classList.remove('fixed-navbar');
        navbar.classList.add('absolute-navbar');
    }
}
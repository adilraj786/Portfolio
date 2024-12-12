// Select the menu icon and navbar
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

// Add a click event listener to toggle the 'active' class
menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});
// 

var typed = new Typed(".typing-text", {
    strings: ["Web Developer", "Programmer", "Fullstack Developer"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
});

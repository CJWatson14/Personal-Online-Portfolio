
console.log("Script is running!");

// Select the menu toggle button and navigation links
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

// Toggle the visibility of nav links when the hamburger button is clicked
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

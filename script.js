document.addEventListener("DOMContentLoaded", function () {
    var typed = new Typed(".text", {
        strings: ["Fullstack Developer", "Web Designer", "Freelancer"], 
        typeSpeed: 100,
        loop: true,
        backSpeed: 50,
        backDelay: 1000,
        startDelay: 1000
    });
});

// Mobile Menu Functionality
const menuIcon = document.querySelector('.menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('active');
    navbar.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!menuIcon.contains(e.target) && !navbar.contains(e.target)) {
        menuIcon.classList.remove('active');
        navbar.classList.remove('active');
    }
});

// Close menu when clicking on a link
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        menuIcon.classList.remove('active');
        navbar.classList.remove('active');
    });
});

// function setProgress(id, percentage) {
//     let degree = (percentage / 100) * 360;
//     document.getElementById(id).style.background = `conic-gradient(#00e0ff ${degree}deg, #333 ${degree}deg)`;
// }

// window.onload = function() {
//     setProgress("creativity", 90);
//     setProgress("communication", 65);
//     setProgress("problem-solving", 75);
//     setProgress("teamwork", 85);
// };

// Smooth scrolling for menu links
document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", function (event) {
        let targetId = this.getAttribute("href").substring(1);
        let targetElement = document.getElementById(targetId);

        if (targetElement) {
            event.preventDefault();
            targetElement.scrollIntoView({ behavior: "smooth" });
        }
    });
});

window.addEventListener('load', function() {
    const imageBoxes = document.querySelectorAll('.image-box');

    imageBoxes.forEach(box => {
        // Remove setTimeout and add 'settled' class immediately
        box.classList.add('settled');
    });
});

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// Gallery Animation
document.addEventListener('DOMContentLoaded', function() {
    const imageBoxes = document.querySelectorAll('.image-box');
    
    // Add settled class to each image box with a delay
    imageBoxes.forEach((box, index) => {
        setTimeout(() => {
            box.classList.add('settled');
        }, index * 500); // 500ms delay between each image
    });
});
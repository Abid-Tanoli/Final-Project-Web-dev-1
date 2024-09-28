const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let currentSlideIndex = 0;

const next = document.getElementById('next');
const prev = document.getElementById('prev');

// Show the next slide
const nextSlide = () => {
    goToSlide(currentSlideIndex + 1);
}

// Show the previous slide
const prevSlide = () => {
    goToSlide(currentSlideIndex - 1);
}

// function to move to a specific slide
const goToSlide = (index) => {
    // Wrap around the slides if out of bounds
    if (index >= slides.length) {
        index = 0;
    }
    if (index < 0) {
        index = slides.length - 1;
    }

    // Remove 'current' from the active slide and 'activedot' from the active dot
    slides[currentSlideIndex].classList.remove('current');
    dots[currentSlideIndex].classList.remove('activedot');

    // Add 'current' to the new slide and 'activedot' to the corresponding dot
    slides[index].classList.add('current');
    dots[index].classList.add('activedot');

    // Update the current slide index
    currentSlideIndex = index;
}

// Add event listeners for the 'next' and 'prev' buttons
next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

// Add event listeners for the dots
dots.forEach((dot, dotIndex) => {
    dot.addEventListener('click', () => {
        goToSlide(dotIndex);
    });
});

window.onload = setInterval(() => {
    goToSlide(currentSlideIndex + 1);
}, 4000);



document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".btn");

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const storyParagraph = this.previousElementSibling; // Get the paragraph before the button
            
            if (storyParagraph.style.display === "none") {
                storyParagraph.style.display = "block"; // Show the paragraph
                this.textContent = "Read Less"; // Change button text
            } else {
                storyParagraph.style.display = "none"; // Hide the paragraph
                this.textContent = "Read More"; // Change button text back
            }
        });
    });
});

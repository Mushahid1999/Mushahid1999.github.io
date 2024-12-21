let currentIndex = 0;
const slides = document.querySelectorAll(".carousel-slide");
const dots = document.querySelectorAll(".dot");
const slideInterval = 3000; // Time for each slide in milliseconds

// Function to show the active slide with smooth transitions
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.opacity = "0"; // Fade out all slides
        slide.style.transition = "opacity 1.5s ease-in-out"; // Smooth blending effect
        slide.style.display = "none"; // Hide slides initially
        dots[i].classList.remove("active"); // Remove active class from dots
    });

    slides[index].style.display = "flex"; // Display the current slide
    setTimeout(() => (slides[index].style.opacity = "1"), 50); // Fade in the slide
    dots[index].classList.add("active"); // Highlight the active dot
}

// Function to move to the next slide
function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length; // Loop back to the first slide
    showSlide(currentIndex);
}

// Function to manually set the slide via dots
function currentSlide(index) {
    currentIndex = index;
    showSlide(currentIndex);
    resetTimer(); // Reset the auto-slideshow timer
}

// Function to reset the timer for auto-slideshow
function resetTimer() {
    clearInterval(slideTimer);
    slideTimer = setInterval(nextSlide, slideInterval);
}

// Start the slideshow
let slideTimer = setInterval(nextSlide, slideInterval);
showSlide(currentIndex);

// Add click event listeners to the dots for manual navigation
dots.forEach((dot, i) => {
    dot.addEventListener("click", () => currentSlide(i));
});


document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById("background-video");
    if (video) {
        video.play().catch((error) => {
            console.error("Autoplay failed:", error);
        });
    }
});



// Detect when elements are in the viewport
const fadeInElements = document.querySelectorAll(".fade-in");

const handleFadeIn = () => {
    fadeInElements.forEach((el, index) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            setTimeout(() => {
                el.classList.add("visible");
            }, index * 200); // Delay each element by 200ms
        }
    });
};

window.addEventListener("scroll", handleFadeIn);
handleFadeIn(); // Trigger on page load



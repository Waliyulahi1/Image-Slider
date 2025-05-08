let index = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(i) {
    slides.forEach((slide, idx) => {
        slide.classList.remove("active");
        if (idx === i) {
            slide.classList.add("active");
        }
    });
}

function nextSlide() {
    index = (index + 1) % slides.length;
    showSlide(index);
}

function prevSlide() {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
}

// Initialize first slide
showSlide(index);
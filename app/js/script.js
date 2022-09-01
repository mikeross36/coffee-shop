"use strict"

function scrollHeader() {
    const header = document.getElementById("header")

    if (this.scrollY >= 50) {
        header.classList.add("scroll-header")
    }
    else {
        header.classList.remove("scroll-header")
    }
};

function setupSlides() {
    const slides = [...document.querySelectorAll(".slide__container")]
    const prevBtn = document.querySelector(".prev__slide")
    const nextBtn = document.querySelector(".next__slide")
    let index = 0

    const nextSlide = () => {
        slides[index].classList.remove("active-slide")
        index = (index + 1) % slides.length
        slides[index].classList.add("active-slide")
    }

    const prevSlide = () => {
        slides[index].classList.remove("active-slide")
        index = (index - 1 + slides.length) % slides.length
        slides[index].classList.add("active-slide")
    }

    prevBtn.addEventListener("click", prevSlide)
    nextBtn.addEventListener("click", nextSlide)
};

(function () {
    window.addEventListener("scroll", scrollHeader);
    setupSlides()
})()


"use strict"

const globals = () => {
    const containers = document.querySelectorAll(".slide__container")
    const slides = [...document.querySelectorAll(".slide__container")]
    const prevBtn = document.querySelector(".prev__slide")
    const nextBtn = document.querySelector(".next__slide")
    let currSlide = 0;
    return {containers, slides, prevBtn, nextBtn, currSlide}
};
let {containers, slides, prevBtn, nextBtn, currSlide} = globals()

class Testimonials {
    getSlides = async () => {
        try {
            const response = await fetch("/data/slider-data/slider-data.json")
            const slides = await response.json()
            return slides
        }
        catch (error) {
            console.error(error)
        }
    }

    displaySlides = slides => {
        if (containers) {
            containers.forEach((container, cIdx) => {
                slides.forEach((slide, sIdx) => {
                    if (cIdx === sIdx) {
                        container.innerHTML = `
                        <div class="slide">
                            <img src="${slide.quoteIcon}" alt="" class="slide__quote" width="30px" height="30px">
                            <div class="user">
                                <img src="${slide.image}" alt="" class="user__img">
                                <div class="user__info">
                                    <h3>${slide.name}</h3>
                                    <div class="user__stars">
                                        <img src="${slide.starIcon}" alt="" class="star" width="20px" height="20px">
                                        <img src="${slide.starIcon}" alt="" class="star" width="20px" height="20px">
                                        <img src="${slide.starIcon}" alt="" class="star" width="20px" height="20px">
                                        <img src="${slide.starIcon}" alt="" class="star" width="20px" height="20px">
                                        <img src="${slide.starIcon}" alt="" class="star" width="20px" height="20px">
                                    </div>
                                </div>
                            </div>
                            <p class="user__description">${slide.description}</p>
                        </div> `
                   }
                })
            })
        }
    }

    removeActive = (item, element) => {
        item[element].classList.remove("active-slide")
    }

    addActive = (item, element) => {
        item[element].classList.add("active-slide")
    }

    setupSlides = () => {
        if (nextBtn) {
            nextBtn.onclick = () => {
                this.removeActive(slides, currSlide)
                currSlide = (currSlide + 1) % slides.length
                this.addActive(slides, currSlide)
            }
        }

        if (prevBtn) {
            prevBtn.onclick = () => {
                this.removeActive(slides, currSlide)
                currSlide = (currSlide - 1 + slides.length) % slides.length
                this.addActive(slides, currSlide)
            }
        }
    }
};

(async () => {
    const testimonials = new Testimonials()
    const slides = await testimonials.getSlides()
    testimonials.displaySlides(slides)
    testimonials.setupSlides()
})();
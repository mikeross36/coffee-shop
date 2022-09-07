"use strict"

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
        const containers = document.querySelectorAll(".slide__container")
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
    };
};

(async () => {
    const testimonials = new Testimonials()
    const slides = await testimonials.getSlides()
    testimonials.displaySlides(slides)
})();
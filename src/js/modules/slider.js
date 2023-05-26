const slider = (sliderSelector, slidesSelector, nextArrow, sliderWrapperSelector, slidesFieldSelector) => {
    const slider = document.querySelector(sliderSelector);
    const slides = document.querySelectorAll(slidesSelector);
    const next = document.querySelector(nextArrow);
    const sliderWrapper = document.querySelector(sliderWrapperSelector);
    const slidesField = document.querySelector(slidesFieldSelector);
    const width = window.getComputedStyle(sliderWrapper).width;

    let slideIndex = 0;
    let offset = 0;
    let paused;

    slidesField.style.width = 100 * slides.length + '%';

    function plusSlides() {
        if (slideIndex == slides.length) {
            slideIndex = 0;
        } else {
            slideIndex++;
        }

        if (offset == +width.slice(0, width.length - 2) * 2) {
            offset = 0;
        } else {
            offset += +width.slice(0, width.length - 2);
        }

        slidesField.style.transform = `translateX(-${offset}px)`;

    };

    next.addEventListener('click', plusSlides);

    function activateAnimation() {
        paused = setInterval(function () {
            plusSlides();
        }, 3000);
    };

    activateAnimation();

    slider.addEventListener('mouseover', () => clearInterval(paused));

    slider.addEventListener('mouseleave', () => {
        activateAnimation();
    });
};

export default slider;
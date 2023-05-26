import slider from "./modules/slider";
import tabs from "./modules/tabs";
import accordion from "./modules/accordion";
import viewAll from "./modules/viewAll";
import emailForm from "./modules/emailForm";

window.addEventListener('DOMContentLoaded', () => {

    // Slider
    slider('.slider', '.slider__slide', '.slider__next', '.slider__wrapper', '.slider__inner');

    // View all
    viewAll('http://localhost:3000/tabs', '.collections__button', '.collections__wrapper');
    viewAll('http://localhost:3000/nft', '.nft__button', '.nft__wrapper');

    // Tabs
    tabs('.about__tabheader-items', '.about__tabheader-item', '.about__tabcontent');

    // Accordion
    accordion('.faq__arrowdown');

    // EmailForm

    emailForm('http://localhost:3000/requests');

});

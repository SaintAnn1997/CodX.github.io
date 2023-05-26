const accordion = (triggerSelector) => {
    const triggerArrows = document.querySelectorAll(triggerSelector);

    function hideContent() {
        triggerArrows.forEach(arrow => {
            arrow.classList.remove('faq__arrowdown--active');
            arrow.nextElementSibling.classList.remove('faq__content--active');
            arrow.nextElementSibling.style.maxHeight = "0px";
        });
    };

    triggerArrows.forEach(arrow => {
        arrow.addEventListener('click', function () {
            if (!this.classList.contains('faq__arrowdown--active')) {
                hideContent();
                this.classList.add('faq__arrowdown--active');
                this.nextElementSibling.classList.add('faq__content--active');
                this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + "px";
            } else {
                hideContent();
            }
        });
    });
};

export default accordion;
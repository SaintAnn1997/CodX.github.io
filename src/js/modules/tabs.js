const tabs = (tabsParentSelector, tabsSelector, tabsContentSelector) => {
    const tabsParent = document.querySelector(tabsParentSelector);
    const tabs = document.querySelectorAll(tabsSelector);
    const tabsContent = document.querySelectorAll(tabsContentSelector);

    function hideTabsContent() {
        tabsContent.forEach(item => {
            item.style.display = 'none';
            item.classList.remove('fade');
        });

        tabs.forEach(item => {
            item.classList.remove('about__tabheader-item--active');
        });
    };

    function showTabsContent(i = 0) {
        tabsContent[i].style.display = 'flex';
        tabsContent[i].classList.add('fade');
        tabs[i].classList.add('about__tabheader-item--active');
    };

    hideTabsContent();
    showTabsContent();

    tabsParent.addEventListener('click', (e) => {
        const target = e.target;

        if (target && target.classList.contains('about__tabheader-item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabsContent();
                    showTabsContent(i);
                }
            });
        }
    });
};

export default tabs;
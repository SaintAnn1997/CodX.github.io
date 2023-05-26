import { getResource } from "../modules/services/requests";

const viewAll = (url, trigger, wrapper) => {
        const btns = document.querySelectorAll(trigger);

        btns.forEach(btn => {
            btn.addEventListener('click', function (e) {
                getResource(url)
                    .then(data => createTabs(data));

                this.remove();
            });
        });

        function createTabs(response) {
            response.forEach(item => {
                const tab = document.createElement('div');

                if (response.length >= 6) {
                    tab.innerHTML = `
                    <img src=${item.img} alt=${item.alt}>
                    <div class="collections__tab-title"><a class="collections__tab-link" href="#">${item.title}</a>
                    `;
                } else {
                    tab.innerHTML = `
                    <img src=${item.img} alt=${item.alt}>
                    <div class="nft__card-descr">
                        <div class="nft__identification">
                            <div class="nft__card-name">${item.title}</div>
                            <div class="nft__card-number">${item.number}</div>
                        </div>
                        <div class="nft__anonymity">
                            <div class="nft__eye"><img src="img/nft/eye.png" alt="eye"></div>
                            <div class="nft__lock"><img src="img/nft/lock.png" alt=""></div>
                        </div>
                    </div>
                    `;
                }

                document.querySelector(wrapper).appendChild(tab);
            });
        };

};

export default viewAll;
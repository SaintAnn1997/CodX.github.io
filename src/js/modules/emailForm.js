import { postData } from "./services/requests";

const emailForm = (url) => {
    const form = document.querySelector('.footer__form');
    const message = {
        spinner: 'img/requests/spinner.gif',
        ok: 'img/requests/ok.png',
    };

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let statusMessage = document.createElement('div');
        statusMessage.classList.add('status');
        form.parentNode.appendChild(statusMessage);

        let statusImg = document.createElement('img');
        statusImg.setAttribute('src', message.spinner);
        statusMessage.appendChild(statusImg);

        let textMessage = document.createElement('div');
        statusMessage.appendChild(textMessage);

        const formData = new FormData(form);
        const json = JSON.stringify(Object.fromEntries(formData.entries()));

        postData(url, json) 
        .then(res => {
            console.log(res);
            statusImg.setAttribute('src', message.ok);
            statusImg.style.display = 'block';
            statusImg.style.margin = '0 auto';
        })
        .catch(() => {
            textMessage.textContent = 'Что-то пошло не так...';
        })
        .finally(() => {
            form.reset();
            setTimeout(() => {
                statusMessage.remove();
            },5000)
        })
    });
};

export default emailForm;
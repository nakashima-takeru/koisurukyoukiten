document.querySelectorAll('.noise-text').forEach((element) => {
    let timer;

    element.addEventListener('mouseenter', () => {
        clearTimeout(timer);

        element.classList.remove('is-noise');
        void element.offsetWidth;
        element.classList.add('is-noise');

        timer = setTimeout(() => {
            element.classList.remove('is-noise');
        }, 900);
    });
});
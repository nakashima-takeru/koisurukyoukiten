document.querySelectorAll('.noise-text').forEach((element) => {
    let timer;

    element.addEventListener('mouseenter', () => {
        if (element.classList.contains('is-gone')) return;

        clearTimeout(timer);

        element.classList.remove('is-noise');
        void element.offsetWidth;
        element.classList.add('is-noise');

        timer = setTimeout(() => {
            element.classList.add('is-gone');
        }, 900);
    });
});
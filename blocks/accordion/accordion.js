document.querySelectorAll('.accordion').forEach(accordion => {
    let openTitleCount = 0;
    accordion.querySelectorAll('.accordion__item').forEach((accordionItem) => {
        const title = accordionItem.querySelector('.accordion__title');
        const text = accordionItem.querySelector('.accordion__text');
        title.addEventListener('click', () => {
            text.classList.toggle('accordion__text_hidden');
        });
    });
});
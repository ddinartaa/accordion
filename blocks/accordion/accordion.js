const accordionClassName = '.accordion';
const accordionItemClassName = '.accordion__item';
const accordionTitleClassName = '.accordion__title';
const accordionTextClassName = '.accordion__text';
const accordionTextHiddenClassName = 'accordion__text_hidden';


document.querySelectorAll(accordionClassName).forEach(accordion => {
    accordion.querySelectorAll(accordionItemClassName).forEach((accordionItem) => {
        const title = accordionItem.querySelector(accordionTitleClassName);
        const text = accordionItem.querySelector(accordionTextClassName);
        title.addEventListener('click', () => {
            text.classList.toggle(accordionTextHiddenClassName);
        });
    });
});
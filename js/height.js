export function adjustMainHeight() {
    const header = document.querySelector("header");
    const main = document.querySelector("main");

    if (header && main) {
        const headerHeight = header.offsetHeight;
        const windowHeight = window.innerHeight;
        const mainHeight = windowHeight - headerHeight;
        header.style.lineHeight = `${headerHeight}px`
         main.style.top = `${headerHeight}px`
        main.style.height = `${mainHeight}px`;
    }
}

// Вызываем функцию при загрузке страницы и при изменении размера окна

(() => {
    const headers = document.querySelectorAll('[data-overlay-header]');

    if (!headers.length) {
        return;
    }

    let ticking = false;

    const updateHeaders = () => {
        const isScrolled = window.scrollY > 96;
        headers.forEach((header) => header.classList.toggle('is-scrolled', isScrolled));
        ticking = false;
    };

    const requestUpdate = () => {
        if (!ticking) {
            ticking = true;
            window.requestAnimationFrame(updateHeaders);
        }
    };

    updateHeaders();
    window.addEventListener('scroll', requestUpdate, { passive: true });
})();

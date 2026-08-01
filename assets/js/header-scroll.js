(() => {
    const headers = document.querySelectorAll('[data-overlay-header]');

    if (!headers.length) {
        return;
    }

    const desktopQuery = window.matchMedia('(min-width: 768px)');
    let ticking = false;

    const updateHeaders = () => {
        const scrollThreshold = desktopQuery.matches ? 96 : 48;
        const isScrolled = window.scrollY > scrollThreshold;
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
    desktopQuery.addEventListener('change', requestUpdate);
})();

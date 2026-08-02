(() => {
    const button = document.querySelector('[aria-controls="mobile-navigation"]');
    const navigation = document.getElementById('mobile-navigation');

    if (!button || !navigation) return;

    const overlayHeader = button.closest('[data-overlay-header]');

    const updateOverlayHeaderState = (isOpen) => {
        if (!overlayHeader) return;
        overlayHeader.classList.toggle('is-menu-open', isOpen);
    };

    const beginOverlayHeaderClosing = () => {
        if (!overlayHeader) return;
        overlayHeader.classList.add('is-menu-closing');
    };

    const endOverlayHeaderClosing = () => {
        if (!overlayHeader) return;

        window.requestAnimationFrame(() => {
            window.requestAnimationFrame(() => {
                overlayHeader.classList.remove('is-menu-closing');
            });
        });
    };

    const closeMenu = (returnFocus = false) => {
        beginOverlayHeaderClosing();
        updateOverlayHeaderState(false);

        navigation.hidden = true;
        navigation.classList.add('hidden');

        button.setAttribute('aria-expanded', 'false');
        button.setAttribute('aria-label', 'Άνοιγμα μενού');

        endOverlayHeaderClosing();

        if (returnFocus) button.focus();
    };

    const openMenu = () => {
        if (overlayHeader) {
            overlayHeader.classList.remove('is-menu-closing');
        }

        updateOverlayHeaderState(true);
        navigation.hidden = false;
        navigation.classList.remove('hidden');
        button.setAttribute('aria-expanded', 'true');
        button.setAttribute('aria-label', 'Κλείσιμο μενού');
    };

    button.addEventListener('click', () => {
        if (button.getAttribute('aria-expanded') === 'true') {
            closeMenu();
        } else {
            openMenu();
        }
    });

    navigation.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => closeMenu());
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && button.getAttribute('aria-expanded') === 'true') {
            closeMenu(true);
        }
    });

    const desktop = window.matchMedia('(min-width: 1280px)');
    const handleDesktopChange = (event) => {
        if (event.matches) closeMenu();
    };

    desktop.addEventListener('change', handleDesktopChange);
})();

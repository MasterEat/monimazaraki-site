(() => {
    'use strict';

    const galleryElements = [...document.querySelectorAll('[data-ministry-gallery]')];
    const lightbox = document.querySelector('[data-ministry-lightbox]');
    if (!galleryElements.length || !lightbox) return;

    const lightboxImage = lightbox.querySelector('.ministry-lightbox__image');
    const lightboxDescription = lightbox.querySelector('.ministry-lightbox__description');
    const lightboxCounter = lightbox.querySelector('.ministry-lightbox__counter');
    const closeButton = lightbox.querySelector('[data-lightbox-close]');
    const previousButton = lightbox.querySelector('[data-lightbox-previous]');
    const nextButton = lightbox.querySelector('[data-lightbox-next]');
    const backdrop = lightbox.querySelector('[data-lightbox-backdrop]');
    let activeGallery = null;
    let lightboxIndex = 0;
    let opener = null;
    let previousBodyOverflow = '';

    const states = galleryElements.map((element) => {
        const state = {
            element,
            images: JSON.parse(element.querySelector('.ministry-gallery__data').textContent),
            currentIndex: 0,
            thumbnailWindow: 0,
            mainButton: element.querySelector('.ministry-gallery__main'),
            mainImage: element.querySelector('.ministry-gallery__main-image'),
            thumbnails: element.querySelector('.ministry-gallery__thumbnails'),
            previousCarousel: element.querySelector('[data-carousel-prev]'),
            nextCarousel: element.querySelector('[data-carousel-next]')
        };

        const renderThumbnails = () => {
            if (!state.thumbnails) return;
            const available = state.images.map((image, index) => ({ image, index }))
                .filter((item) => item.index !== state.currentIndex);
            const visible = available.length > 3
                ? Array.from({ length: 3 }, (_, offset) => available[(state.thumbnailWindow + offset) % available.length])
                : available;

            state.thumbnails.replaceChildren(...visible.map(({ image, index }) => {
                const button = document.createElement('button');
                const thumbnail = document.createElement('img');
                button.className = 'ministry-gallery__thumbnail';
                button.type = 'button';
                button.dataset.imageIndex = String(index);
                button.setAttribute('aria-label', `Επιλογή εικόνας: ${image.alt}`);
                thumbnail.src = image.src;
                thumbnail.alt = image.alt;
                thumbnail.width = image.width;
                thumbnail.height = image.height;
                thumbnail.loading = 'lazy';
                thumbnail.decoding = 'async';
                button.append(thumbnail);
                button.addEventListener('click', () => selectMain(index));
                return button;
            }));
        };

        const selectMain = (index) => {
            const image = state.images[index];
            state.currentIndex = index;
            state.thumbnailWindow = 0;
            state.mainImage.src = image.src;
            state.mainImage.alt = image.alt;
            state.mainImage.width = image.width;
            state.mainImage.height = image.height;
            state.mainImage.dataset.imageIndex = String(index);
            state.mainButton.setAttribute('aria-label', `Άνοιγμα εικόνας: ${image.alt}`);
            renderThumbnails();
        };

        state.thumbnails?.querySelectorAll('[data-image-index]').forEach((button) => {
            button.addEventListener('click', () => selectMain(Number(button.dataset.imageIndex)));
        });
        state.previousCarousel?.addEventListener('click', () => {
            const count = state.images.length - 1;
            state.thumbnailWindow = (state.thumbnailWindow - 1 + count) % count;
            renderThumbnails();
        });
        state.nextCarousel?.addEventListener('click', () => {
            state.thumbnailWindow = (state.thumbnailWindow + 1) % (state.images.length - 1);
            renderThumbnails();
        });
        state.mainButton.addEventListener('click', () => openLightbox(state));
        return state;
    });

    const showLightboxImage = () => {
        const image = activeGallery.images[lightboxIndex];
        lightboxImage.src = image.src;
        lightboxImage.alt = image.alt;
        lightboxDescription.textContent = image.alt;
        const multiple = activeGallery.images.length > 1;
        previousButton.hidden = !multiple;
        nextButton.hidden = !multiple;
        lightboxCounter.hidden = !multiple;
        lightboxCounter.textContent = multiple ? `${lightboxIndex + 1} από ${activeGallery.images.length}` : '';
    };

    function openLightbox(state) {
        activeGallery = state;
        lightboxIndex = state.currentIndex;
        opener = state.mainButton;
        previousBodyOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        lightbox.hidden = false;
        showLightboxImage();
        closeButton.focus();
    }

    const closeLightbox = () => {
        if (lightbox.hidden) return;
        lightbox.hidden = true;
        lightboxImage.removeAttribute('src');
        lightboxImage.alt = '';
        document.body.style.overflow = previousBodyOverflow;
        const returnTarget = opener;
        activeGallery = null;
        opener = null;
        returnTarget?.focus();
    };

    const navigate = (direction) => {
        if (!activeGallery || activeGallery.images.length < 2) return;
        lightboxIndex = (lightboxIndex + direction + activeGallery.images.length) % activeGallery.images.length;
        showLightboxImage();
    };

    closeButton.addEventListener('click', closeLightbox);
    backdrop.addEventListener('click', closeLightbox);
    previousButton.addEventListener('click', () => navigate(-1));
    nextButton.addEventListener('click', () => navigate(1));
    document.addEventListener('keydown', (event) => {
        if (lightbox.hidden) return;
        if (event.key === 'Escape') closeLightbox();
        else if (event.key === 'ArrowLeft') navigate(-1);
        else if (event.key === 'ArrowRight') navigate(1);
        else if (event.key === 'Tab') {
            const focusable = [...lightbox.querySelectorAll('button:not([hidden])')];
            const first = focusable[0];
            const last = focusable[focusable.length - 1];
            if (event.shiftKey && document.activeElement === first) {
                event.preventDefault();
                last.focus();
            } else if (!event.shiftKey && document.activeElement === last) {
                event.preventDefault();
                first.focus();
            }
        }
    });
})();

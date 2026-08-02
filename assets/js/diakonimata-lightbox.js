(() => {
  const lightbox = document.querySelector('[data-lightbox]');
  if (!lightbox) return;

  const image = lightbox.querySelector('[data-lightbox-image]');
  const description = lightbox.querySelector('[data-lightbox-description]');
  const counter = lightbox.querySelector('[data-lightbox-counter]');
  const closeButton = lightbox.querySelector('[data-lightbox-close]');
  const previousButton = lightbox.querySelector('[data-lightbox-prev]');
  const nextButton = lightbox.querySelector('[data-lightbox-next]');
  let gallery = [];
  let currentIndex = 0;
  let activator = null;

  const focusable = () => [...lightbox.querySelectorAll('button:not([hidden])')];

  function show(index) {
    currentIndex = (index + gallery.length) % gallery.length;
    const item = gallery[currentIndex];
    image.src = item.dataset.fullSrc;
    image.alt = item.dataset.alt;
    description.textContent = item.dataset.alt;
    const multiple = gallery.length > 1;
    previousButton.hidden = !multiple;
    nextButton.hidden = !multiple;
    counter.hidden = !multiple;
    counter.textContent = multiple ? `Φωτογραφία ${currentIndex + 1} από ${gallery.length}` : '';
  }

  function open(trigger, index) {
    const root = trigger.closest('[data-gallery]');
    gallery = [...root.querySelectorAll('[data-gallery-item]')];
    if (!gallery.length) return;
    activator = trigger;
    show(index);
    lightbox.hidden = false;
    document.body.classList.add('lightbox-open');
    closeButton.focus();
  }

  function close() {
    if (lightbox.hidden) return;
    lightbox.hidden = true;
    document.body.classList.remove('lightbox-open');
    image.removeAttribute('src');
    image.alt = '';
    const returnTarget = activator;
    activator = null;
    returnTarget?.focus();
  }

  document.querySelectorAll('[data-gallery-open]').forEach(button => {
    button.addEventListener('click', () => open(button, Number(button.dataset.galleryOpen)));
  });
  document.querySelectorAll('[data-gallery-item]').forEach(button => {
    button.addEventListener('click', () => {
      const items = [...button.closest('[data-gallery]').querySelectorAll('[data-gallery-item]')];
      open(button, items.indexOf(button));
    });
  });
  closeButton.addEventListener('click', close);
  previousButton.addEventListener('click', () => show(currentIndex - 1));
  nextButton.addEventListener('click', () => show(currentIndex + 1));
  lightbox.querySelector('[data-lightbox-backdrop]').addEventListener('click', close);
  lightbox.addEventListener('keydown', event => {
    if (event.key === 'Escape') close();
    else if (event.key === 'ArrowLeft' && gallery.length > 1) show(currentIndex - 1);
    else if (event.key === 'ArrowRight' && gallery.length > 1) show(currentIndex + 1);
    else if (event.key === 'Tab') {
      const controls = focusable();
      const first = controls[0];
      const last = controls[controls.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    }
  });
})();

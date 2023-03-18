const phone = document.querySelector('.phone');

phone.addEventListener('mouseenter', () => {
  document.querySelectorAll('.content:not(.phone)').forEach(el => {
    el.style.filter = 'blur(3px)';
  });
});

phone.addEventListener('mouseleave', () => {
  document.querySelectorAll('.content:not(.phone)').forEach(el => {
    el.style.filter = 'none';
  });
});

// Removing scrollbars from iframe but still able to scroll with mouse wheel

let iframe = document.querySelector('iframe');
iframe.contentWindow.addEventListener('wheel', function(e) {
  if (iframe.contentWindow.scrollY === 0 && e.deltaY < 0) {
    e.preventDefault();
  } else if (iframe.contentWindow.innerHeight + iframe.contentWindow.scrollY >= iframe.contentWindow.document.body.offsetHeight && e.deltaY > 0) {
    e.preventDefault();
  }
}, { passive: false });
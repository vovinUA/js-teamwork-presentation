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
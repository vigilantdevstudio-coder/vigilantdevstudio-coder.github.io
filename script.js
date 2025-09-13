document.addEventListener('DOMContentLoaded', () => {
  // Карусель скриншотов
  const gallery = document.querySelector('.screenshot-gallery');
  let scrollAmount = 0;
  const scrollSpeed = 1;

  function autoScroll() {
    scrollAmount += scrollSpeed;
    if (scrollAmount >= gallery.scrollWidth - gallery.clientWidth) {
      scrollAmount = 0;
    }
    gallery.scrollTo({ left: scrollAmount, behavior: 'smooth' });
  }

  setInterval(autoScroll, 30);

  // Плавная прокрутка для ссылок (если добавишь навигацию)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelector(anchor.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
});

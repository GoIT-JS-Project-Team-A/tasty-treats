import Swiper from '../../../node_modules/swiper/swiper-bundle.min.mjs';
import '../../../node_modules/swiper/swiper-bundle.css';
import '../../../node_modules/swiper/modules/pagination.min.css';

new Swiper('.swiper', {
  // Slider oluşturma - Create slider
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
    dynamicBullets: true,
  },
  spaceBetween: 10,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  grabCursor: true,
  loop: true,
  mousewheel: {
    invert: true,
  },
  slidesPerView: 1,
  slidesPerGroup: 1,
});

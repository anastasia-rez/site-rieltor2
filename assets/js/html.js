// Navbar
const navBar = document.querySelector('.nav-bar');
let isSticky = false;

const handleScroll = () => {
  if (window.scrollY > 45) {
    if (!isSticky) {
      // Добавляем класс .sticky-top, чтобы зафиксировать навбар
      navBar.classList.add('sticky-top');
      // Расширяем навбар
      navBar.style.height = '100px'; // Замените это значение на желаемую высоту
      isSticky = true;
    }
  } else {
    if (isSticky) {
      // Убираем класс .sticky-top, чтобы убрать фиксацию навбара
      navBar.classList.remove('sticky-top');
      // Возвращаем навбар к начальной высоте
      navBar.style.height = ''; // Сброс на значение по умолчанию
      isSticky = false;
    }
  }
};

window.addEventListener('scroll', handleScroll);
// Navbar

// carousel
let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

function showSlide(index) {
  items[currentIndex].classList.remove('active');
  currentIndex = index;
  items[currentIndex].classList.add('active');
}

function nextSlide() {
  showSlide(1 - currentIndex); // Переключаемся между 0 и 1
}

function prevSlide() {
  showSlide(1 - currentIndex); // Переключаемся между 0 и 1
}

prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);

// Автоматическая смена слайдов каждые 5 секунд
setInterval(() => {
  nextSlide();
}, 5000);

showSlide(currentIndex);
// carousel


// search
document.addEventListener('DOMContentLoaded', () => {
    const selectedService = document.getElementById('selectedService');
    const searchButton = document.getElementById('searchButton');
  
    searchButton.addEventListener('click', () => {
      const selectedValue = selectedService.value;
      let redirectUrl = '';
  
      switch (selectedValue) {
        case 'rentApartments':
          redirectUrl = '/public/rentApartments.html';
          break;
        case 'sellApartments':
          redirectUrl = '/public/sellApartments.html';
          break;
        case 'rentHouses':
          redirectUrl = '/public/rentHouses.html';
          break;
        case 'sellHouses':
          redirectUrl = '/public/sellHouses.html';
          break;
        case 'landPlots':
          redirectUrl = '/public/landPlots.html';
          break;
        case 'offices':
          redirectUrl = '/public/landPlots.html';
          break;
        default:
          break;
      }
  
      if (redirectUrl) {
        window.location.href = redirectUrl;
      }
    });
  });
// search



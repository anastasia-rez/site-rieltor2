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
  const searchButtons = document.querySelectorAll('.btn-search');

  searchButtons.forEach(searchButton => {
    searchButton.addEventListener('click', () => {
      const selectedService = searchButton.parentElement.previousElementSibling.querySelector('select');
      const selectedValue = selectedService.value;
      let redirectUrl = '';

      switch (selectedValue) {
        case 'rentApartments':
          redirectUrl = '/rentApartments.html';
          break;
        case 'sellApartments':
          redirectUrl = '/sellApartments.html';
          break;
        case 'rentHouses':
          redirectUrl = '/rentHouses.html';
          break;
        case 'sellHouses':
          redirectUrl = '/sellHouses.html';
          break;
        case 'landPlots':
          redirectUrl = '/landPlots.html';
          break;
        case 'offices':
          redirectUrl = '/offices.html';
          break;
        default:
          break;
      }

      if (redirectUrl) {
        window.location.href = redirectUrl;
      }
    });
  });
});


// search



const customCarousels = document.querySelectorAll('.custom-carousel');

// Добавляем обработчики событий для всех найденных каруселей
customCarousels.forEach(customCarousel => {
  // Находим элементы карусели
  const customPrevButton = customCarousel.querySelector('[data-carousel-control="prev"]');
  const customNextButton = customCarousel.querySelector('[data-carousel-control="next"]');
  const customItems = customCarousel.querySelectorAll('.custom-carousel-item');
  let customIndex = 0;

  // Добавляем обработчики событий для кнопок Previous и Next
  customPrevButton.addEventListener('click', () => {
    customIndex = (customIndex - 1 + customItems.length) % customItems.length;
    showCustomSlide(customIndex, customItems);
  });

  customNextButton.addEventListener('click', () => {
    customIndex = (customIndex + 1) % customItems.length;
    showCustomSlide(customIndex, customItems);
  });

  // Сразу показываем первый слайд
  showCustomSlide(customIndex, customItems);

  // Функция для показа слайда
  function showCustomSlide(index, items) {
    items.forEach(item => {
      item.classList.remove('active');
    });
    items[index].classList.add('active');
  }
});



// отзывы
document.addEventListener('DOMContentLoaded', () => {
  const customPrevButton = document.getElementById('customPrevButton');
  const customNextButton = document.getElementById('customNextButton');
  const carouselItems = document.querySelectorAll('.carousel-item-reviews');
  let currentIndexReviews = 0;

  customPrevButton.addEventListener('click', () => {
    currentIndexReviews = (currentIndexReviews - 1 + carouselItems.length) % carouselItems.length;
    showSlide(currentIndexReviews);
  });

  customNextButton.addEventListener('click', () => {
    currentIndexReviews = (currentIndexReviews + 1) % carouselItems.length;
    showSlide(currentIndexReviews);
  });

  function showSlide(index) {
    const offset = -(index * 105) + '%'; // Для десктопной версии
    carouselItems.forEach(item => {
      item.style.transform = `translateX(${offset})`;
    });
  }
});
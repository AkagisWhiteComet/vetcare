const slidesData = [
  {
    image: 'url(../../images/services/vet.jpg)',
    textId: 'slide1'
  },
  {
    image: 'url(../../images/services/hospital.jpg)',
    textId: 'slide2'
  },
  {
    image: 'url(../../images/services/ambulance.jpg)',
    textId: 'slide3'
  },
  {
    image: 'url(../../images/services/grooming.jpg)',
    textId: 'slide4'
  },
  {
    image: 'url(../../images/services/care.jpg)',
    textId: 'slide5'
  }
]

const buttons = document.querySelectorAll('.services__content-card');
const slides = document.querySelectorAll('.slide-text');
const imageContainer = document.getElementById('imageContainer');

function showSlide(index) {
  // Убираем активность у всех кнопок и текстов
  buttons.forEach(b => b.classList.remove('active-card'));
  slides.forEach(s => s.classList.remove('active'));

  // Активируем выбранную кнопку
  buttons[index].classList.add('active-card');

  // Активируем соответствующий текст
  const currentSlideTextId = slidesData[index].textId;

  slides.forEach(s => {
    if (s.id === currentSlideTextId) {
      s.classList.add('active');
    }
  });

  // Меняем фон картинки
   imageContainer.style.backgroundImage = slidesData[index].image;
}

/* function setActiveBlock(index) {
  buttons.forEach(b => b.classList.remove('active-card'));
  
  buttons[index].classList.add('active-card');
} */

showSlide(0)

buttons.forEach((block, index) => {
  block.addEventListener('click', () => {
    showSlide(index);
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.team__button');
  const cards = document.querySelectorAll('.team__members'); // Убеждаемся, что берём карточки
  let currentIndex = 0;

  function showCard(index) {
    cards.forEach((card, i) => {
      card.classList.toggle('team-active', i === index); // Переключаем только карточки
    });
    buttons.forEach((btn, i) => {
      btn.classList.toggle('team-btn-active', i === index); // Обновляем активную кнопку
    });
    currentIndex = index;
  }

  buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
      showCard(index);
    });
  });

  showCard(currentIndex); // Показываем первую карточку при загрузке
});
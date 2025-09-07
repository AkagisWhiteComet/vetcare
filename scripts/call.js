document.getElementById('callButton').addEventListener('click', function(e) {
  // Проверяем, мобильное ли устройство
  const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  
  if (!isMobile) {
    e.preventDefault(); // отменяем переход по ссылке
    alert('Позвоните нам по телефону: 8 999 444-33-55');
    // Или открыть модальное окно с формой заказа вызова
  }
  // Если мобильное — ссылка сработает как обычно
});
/* const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const text = document.getElementById('message');
let isNameValid = true;
let isEmailValid = true;
let isMessageValid = true;

form.addEventListener('submit', e => {
  e.preventDefault();
  
  validateInputs();
});

const setError = (element, message) => {
  const field = element.parentElement;
  const errorDisplay = field.querySelector('.error');

  errorDisplay.innerText = message;
  field.classList.add('error');
  field.classList.remove('success');
}

const setSuccess = (element) => {
  const field = element.parentElement;
  const errorDisplay = field.querySelector('.error');

  errorDisplay.innerText = '';
  field.classList.add('success');
  field.classList.remove('error');
}

const isValidEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
  isNameValid = true;
  isEmailValid = true;
  isMessageValid = true;

  const nameValue = name.value.trim();
  const emailValue = email.value.trim();
  const messageValue = text.value.trim();

  if (nameValue === '') {
    setError(name, 'Необходимо ввести имя');
    isNameValid = false;
  } else {
    setSuccess(name);
  }

  if (emailValue === '') {
    setError(email, 'Введите адрес эл. почты');
    isEmailValid = false;
  } else if (!isValidEmail(emailValue)) {
    setError(email, 'Некорректный адрес эл. почты');
    isEmailValid = false;
  } else {
    setSuccess(email);
  }

  if (messageValue === '') {
    setError(text, 'Нельзя отправлять пустое письмо');
    isMessageValid = false;
  } else {
    setSuccess(text);
  }

  if (isNameValid && isEmailValid && isMessageValid) {
    form.reset();

    // Remove 'success' from the parent fields, not the inputs
    const nameField = name.parentElement;
    const emailField = email.parentElement;
    const textField = text.parentElement;

    nameField.classList.remove('success');
    emailField.classList.remove('success');
    textField.classList.remove('success');

    alert('Данные успешно отправлены!');
  }
}; */

const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const text = document.getElementById('message');
let isNameValid = false;
let isEmailValid = false;
let isMessageValid = false;

const setError = (element, message) => {
  const field = element.parentElement;
  const errorDisplay = field.querySelector('.error');

  errorDisplay.innerText = message;
  field.classList.add('error');
  field.classList.remove('success');
};

const setSuccess = (element) => {
  const field = element.parentElement;
  const errorDisplay = field.querySelector('.error');

  errorDisplay.innerText = '';
  field.classList.add('success');
  field.classList.remove('error');
};

const isValidEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const validateName = () => {
  const nameValue = name.value.trim();
  if (nameValue === '') {
    setError(name, 'Необходимо ввести имя');
    isNameValid = false;
  } else {
    setSuccess(name);
    isNameValid = true;
  }
};

const validateEmail = () => {
  const emailValue = email.value.trim();
  if (emailValue === '') {
    setError(email, 'Введите адрес эл. почты');
    isEmailValid = false;
  } else if (!isValidEmail(emailValue)) {
    setError(email, 'Некорректный адрес эл. почты');
    isEmailValid = false;
  } else {
    setSuccess(email);
    isEmailValid = true;
  }
};

const validateMessage = () => {
  const messageValue = text.value.trim();
  if (messageValue === '') {
    setError(text, 'Нельзя отправлять пустое письмо');
    isMessageValid = false;
  } else {
    setSuccess(text);
    isMessageValid = true;
  }
};

// Валидация в реальном времени на событиях input и blur
name.addEventListener('input', validateName);
name.addEventListener('blur', validateName);
email.addEventListener('input', validateEmail);
email.addEventListener('blur', validateEmail);
text.addEventListener('input', validateMessage);
text.addEventListener('blur', validateMessage);

// Обработка сабмита формы
form.addEventListener('submit', e => {
  e.preventDefault();
  
  // Проверяем все поля ещё раз при сабмите
  validateName();
  validateEmail();
  validateMessage();

  if (isNameValid && isEmailValid && isMessageValid) {
    setTimeout(() => {
      form.reset();

      // Удаляем классы success и error с родительских элементов
      const nameField = name.parentElement;
      const emailField = email.parentElement;
      const textField = text.parentElement;

      nameField.classList.remove('success', 'error');
      emailField.classList.remove('success', 'error');
      textField.classList.remove('success', 'error');

      // Сбрасываем флаги после отправки
      isNameValid = false;
      isEmailValid = false;
      isMessageValid = false;

      // Показываем встроенный alert
      alert('Данные успешно отправлены!');
    }, 300); // Задержка для визуального эффекта
  }
});
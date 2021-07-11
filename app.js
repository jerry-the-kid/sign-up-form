'use strict';
const errorImgs = document.querySelectorAll('.error');
const notifications = document.querySelectorAll('.notification');
const inputTexts = document.querySelectorAll('.input-text');
const form = document.querySelector('.form');
const inputBtn = document.querySelector('.input-btn');

//Add hidden class
errorImgs.forEach(img => img.classList.add('hidden'));
notifications.forEach(notification => notification.classList.add('hidden'));

const removeHidden = function (index) {
  document.querySelector(`.error--${index}`).classList.remove('hidden');
  document.querySelector(`.notification--${index}`).classList.remove('hidden');
};

const addHidden = function (index) {
  document.querySelector(`.error--${index}`).classList.add('hidden');
  document.querySelector(`.notification--${index}`).classList.add('hidden');
};

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const checkValid = function (input) {
  const index = +input.dataset.input;
  const value = input.value;
  if (!value || (index === 3 && !validateEmail(value))) {
    removeHidden(index);
    input.style.border = '2px solid hsl(0, 100%, 74%)';
    input.placeholder = '';
  }
};

inputTexts.forEach(function (input) {
  input.addEventListener('blur', function (e) {
    checkValid(e.target);
  });
});

inputTexts.forEach(function (input) {
  input.addEventListener('focus', function (e) {
    const index = e.target.dataset.input;
    addHidden(index);
    this.style.border = '1.5px solid var(--color-blue)';
  });
});

inputBtn.addEventListener('click', function (e) {
  e.preventDefault();

  inputTexts.forEach(function (input) {
    checkValid(input);
  });
});

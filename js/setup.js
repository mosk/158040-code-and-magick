'use strict';

var NUMBER_OF_WIZARDS = 4;
var WIZARD_DATA = {
  names: ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон', 'Джон', 'Томми', 'Сильвестр', 'Марлон', 'Дэвид', 'Михаил', 'Александр'],
  surnames: ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг', 'Сноу', 'Версетти', 'Сталлоне', 'Брандо', 'Блейн', 'Боярский', 'Македонский'],
  coatColors: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
  eyesColors: ['black', 'red', 'blue', 'yellow', 'green', 'transparent'],
  fireballColors: ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848']
};
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var setup = document.querySelector('.setup');
var setupSimilar = setup.querySelector('.setup-similar');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var similarWizardsList = document.querySelector('.setup-similar-list');

var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var userNameInput = setup.querySelector('.setup-user-name');
var userNameMinLength = userNameInput.getAttribute('minlength');

var userWizardCoat = setup.querySelector('.setup-wizard .wizard-coat');
var userWizardEyes = setup.querySelector('.setup-wizard .wizard-eyes');
var userWizardFireball = setup.querySelector('.setup-fireball-wrap');

function onPopupEscPress(evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
}

function openPopup() {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
}

function closePopup() {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
}

function createWizard() {
  return {
    name: getRandomElement(WIZARD_DATA.names) + ' ' + getRandomElement(WIZARD_DATA.surnames),
    coatColor: getRandomElement(WIZARD_DATA.coatColors),
    eyesColor: getRandomElement(WIZARD_DATA.eyesColors)
  };
}

function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

function getRandomElement(array) {
  var randomNumber = Math.round(getRandomNumber(0, array.length - 1));

  return array[randomNumber];
}

function createWizards(number) {
  var wizards = [];

  for (var i = 0; i < number; i++) {
    wizards.push(createWizard());
  }

  return wizards;
}

function renderWizard(wizard, wizardTemplate) {
  wizardTemplate.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardTemplate.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardTemplate.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardTemplate;
}

setupSimilar.classList.remove('hidden');

function renderWizards(array) {
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < array.length; i++) {
    fragment.appendChild(renderWizard(array[i], similarWizardTemplate.cloneNode(true)));
  }

  return fragment;
}

similarWizardsList.appendChild(renderWizards(createWizards(NUMBER_OF_WIZARDS)));

// проверка на минимальное количество символов в Microsoft Edge
userNameInput.addEventListener('input', function (evt) {
  var target = evt.target;

  if (target.value.length < userNameMinLength) {
    target.setCustomValidity('Имя должно состоять минимум из ' + userNameMinLength + '-х символов, добавьте ещё ' + (userNameMinLength - target.value.length));
  } else {
    target.setCustomValidity('');
  }
});

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

userNameInput.addEventListener('focus', function () {
  document.removeEventListener('keydown', onPopupEscPress);
});

userNameInput.addEventListener('focusout', function () {
  document.addEventListener('keydown', onPopupEscPress);
});

userWizardCoat.addEventListener('click', function (evt) {
  evt.target.style.fill = getRandomElement(WIZARD_DATA.coatColors);
});

userWizardEyes.addEventListener('click', function (evt) {
  evt.target.style.fill = getRandomElement(WIZARD_DATA.eyesColors);
});

userWizardFireball.addEventListener('click', function () {
  userWizardFireball.style.background = getRandomElement(WIZARD_DATA.fireballColors);
});

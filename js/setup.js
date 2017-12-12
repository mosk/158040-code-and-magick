'use strict';

var NUMBER_OF_WIZARDS = 4;
var wizards = [];

var userWindow = document.querySelector('.setup');
var userWindowSimilar = document.querySelector('.setup-similar');

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var similarWizardsList = document.querySelector('.setup-similar-list');

var fragment = document.createDocumentFragment();

function createWizard(name, surname, coatColor, eyesColor) {
  var wizard = {
    names: ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон', 'Джон', 'Томми', 'Сильвестр', 'Марлон', 'Дэвид', 'Михаил', 'Александр'],
    surnames: ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг', 'Сноу', 'Версетти', 'Сталлоне', 'Брандо', 'Блейн', 'Боярский', 'Македонский'],
    coatColors: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
    eyesColors: ['black', 'red', 'blue', 'yellow', 'green', 'transparent']
  };

  name = getRandomElement(wizard.names);
  surname = getRandomElement(wizard.surnames);
  coatColor = getRandomElement(wizard.coatColors);
  eyesColor = getRandomElement(wizard.eyesColors);

  return {
    name: name + ' ' + surname,
    coatColor: coatColor,
    eyesColor: eyesColor
  };
}

function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

function getRandomElement(array) {
  var randomNumber = Math.round(getRandomNumber(0, array.length - 1));

  return array[randomNumber];
}

function addWizards(houseOfWizards, number) {
  for (var i = 0; i < number; i++) {
    houseOfWizards.push(createWizard());
  }
}

function renderWizard(wizard, wizardTemplate) {
  wizardTemplate.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardTemplate.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardTemplate.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardTemplate;
}

addWizards(wizards, NUMBER_OF_WIZARDS);

userWindow.classList.remove('hidden');
userWindowSimilar.classList.remove('hidden');

function renderWizards(array) {
  for (var i = 0; i < array.length; i++) {
    fragment.appendChild(renderWizard(array[i], similarWizardTemplate.cloneNode(true)));
  }

  return fragment;
}

similarWizardsList.appendChild(renderWizards(wizards));

'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон', 'Джон', 'Томми', 'Сильвестр', 'Марлон', 'Дэвид', 'Михаил', 'Александр'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг', 'Сноу', 'Версетти', 'Сталлоне', 'Брандо', 'Блейн', 'Боярский', 'Македонский'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green', 'transparent'];

var WIZARDS = [];
var NUMBER_OF_WIZARDS = 4;

var userWindow = document.querySelector('.setup');
var userWindowSimilar = document.querySelector('.setup-similar');

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var similarWizardsList = document.querySelector('.setup-similar-list');

var fragment = document.createDocumentFragment();

function createWizard(name, coatColor, eyesColor) {
  var wizard = {};
  wizard.name = name;
  wizard.coatColor = coatColor;
  wizard.eyesColor = eyesColor;

  return wizard;
}

function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

function getRandomElement(array) {
  var randomNumber = Math.round(getRandomNumber(0, array.length - 1));

  return array[randomNumber];
}

function addWizards(houseOfWizards, number, names, surnames, coatColors, eyesColors) {
  for (var i = 0; i < number; i++) {
    var newWizard = createWizard(getRandomElement(names) + ' ' + getRandomElement(surnames), getRandomElement(coatColors), getRandomElement(eyesColors));
    houseOfWizards.push(newWizard);
  }
}

function renderWizard(wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
}

// создаю массив с волшебниками
addWizards(WIZARDS, NUMBER_OF_WIZARDS, WIZARD_NAMES, WIZARD_SURNAMES, COAT_COLORS, EYES_COLORS);

// показываю скрытые блоки
userWindow.classList.remove('hidden');
userWindowSimilar.classList.remove('hidden');

// вывожу волшебников
for (var i = 0; i < WIZARDS.length; i++) {
  fragment.appendChild(renderWizard(WIZARDS[i]));
}

similarWizardsList.appendChild(fragment);

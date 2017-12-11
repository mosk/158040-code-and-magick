'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон', 'Джон', 'Томми', 'Сильвестр', 'Марлон', 'Дэвид', 'Михаил', 'Александр'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг', 'Сноу', 'Версетти', 'Сталлоне', 'Брандо', 'Блейн', 'Боярский', 'Македонский'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green', 'transparent'];
var NUMBER_OF_WIZARDS = 4;

var wizards = [];

var userWindow = document.querySelector('.setup');
var userWindowSimilar = document.querySelector('.setup-similar');

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var similarWizardsList = document.querySelector('.setup-similar-list');

var fragment = document.createDocumentFragment();

function createWizard(name, coatColor, eyesColor) {

  return {
    name: name,
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

function addWizards(houseOfWizards, number, names, surnames, coatColors, eyesColors) {
  for (var i = 0; i < number; i++) {
    houseOfWizards.push(createWizard(getRandomElement(names) + ' ' + getRandomElement(surnames), getRandomElement(coatColors), getRandomElement(eyesColors)));
  }
}

function renderWizard(wizard, wizardTemplate) {
  wizardTemplate.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardTemplate.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardTemplate.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  console.log(wizardTemplate);

  return wizardTemplate;
}

// создаю массив с волшебниками
addWizards(wizards, NUMBER_OF_WIZARDS, WIZARD_NAMES, WIZARD_SURNAMES, COAT_COLORS, EYES_COLORS);

// показываю скрытые блоки
userWindow.classList.remove('hidden');
userWindowSimilar.classList.remove('hidden');

// вывожу волшебников
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i], similarWizardTemplate.cloneNode(true)));
}

similarWizardsList.appendChild(fragment);

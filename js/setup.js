'use strict';

// создаю массив с волшебниками
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон', 'Джон', 'Томми', 'Сильвестр', 'Марлон','Дэвид', 'Михаил', 'Александр'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг', 'Сноу', 'Версетти', 'Сталлоне', 'Брандо', 'Блейн', 'Боярский', 'Македонский'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

var WIZARDS = [];
var NUMBER_OF_WIZARDS = 4;

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
};

addWizards(WIZARDS, NUMBER_OF_WIZARDS, WIZARD_NAMES, WIZARD_SURNAMES, COAT_COLORS, EYES_COLORS);

// показываю скрытые блоки
var userWindow = document.querySelector('.setup');
userWindow.classList.remove('hidden');

var userWindowSimilar = document.querySelector('.setup-similar');
userWindowSimilar.classList.remove('hidden');

// добавляю волшебников в DOM
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var similarWizardsList = document.querySelector('.setup-similar-list');

for (var i = 0; i < NUMBER_OF_WIZARDS; i++) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  similarWizardsList.appendChild(similarWizardTemplate);
};


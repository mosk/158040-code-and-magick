'use strict';

window.renderStatistics = function (ctx, names, times) {
  var widthBlockResults = 420;
  var initialXBlockResults = 100;

  // тень для блока
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, widthBlockResults, 270);

  // блок с рез-ми
  ctx.fillStyle = 'rgb(255, 255, 255)';
  ctx.fillRect(initialXBlockResults, 10, widthBlockResults, 270);

  // текст для блока
  ctx.fillStyle = '#222222';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  var max = -1;

  // функция поиска максимального числа в массиве
  var findMaxInArray = function (arrayName) {
    for (var i = 0; i < arrayName.length; i++) {
      var number = arrayName[i];
      if (number > max) {
        max = number;
      }
    }
    return max;
  };

  // поиск максимального времени
  findMaxInArray(times);

  // сортировка по возрастанию
  var sortNumbersInArray = function (arrayName) {
    for (var i = 0; i <= arrayName.length - 2; i++) {
      var minNumber = arrayName[i];
      for (var j = i + 1; j <= arrayName.length - 1; j++) {
        if (arrayName[j] < minNumber) {
          minNumber = arrayName[j];
          var swap = arrayName[i];
          arrayName[i] = minNumber;
          arrayName[j] = swap;
        }
      }
    }
    return arrayName;
  };

  // сортировка результатов по времени
  sortNumbersInArray(times);

  var histogramHeight = 150;
  var step = histogramHeight / (max - 0);
  var barWidth = 40;
  var indent = (widthBlockResults / times.length - barWidth);
  var initialX = 120;
  var initialY = 90;
  var lineHeight = 20;

  // отрисовка гистограмм
  for (var i = 0; i < times.length; i++) {
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(0, 0, 255, ' + Math.random() + ')';
    }
    ctx.fillRect(initialX + (indent + barWidth) * i, initialY + histogramHeight, barWidth, -(times[i] * step));
    ctx.fillStyle = '#222222';
    ctx.fillText(names[i], initialX + (indent + barWidth) * i, initialY + histogramHeight + lineHeight);
    ctx.fillText(times[i].toFixed(), initialX + (indent + barWidth) * i, initialY + histogramHeight - times[i] * step - lineHeight / 2);
  }
};

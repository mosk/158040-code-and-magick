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
  ctx.fillText('Список чемпионов:', 120, 60);

  var max = -1;
  var maxIndex = -1;

  // поиск максимального времени среди всех результатов
  for (var i = 0 ; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
      maxIndex = i;
    }
  }
  console.log('Максимальное время - ' + max + ', индекс в массиве - ' + maxIndex);

  var histogramHeight = 150;
  var step = histogramHeight / (max - 0);

  var barWidth = 40;
  var indent = (widthBlockResults / times.length - barWidth);
  var initialX = 120;
  var initialY = 90;
  var lineHeight = 20;

  for(var i = 0; i < times.length; i++) {
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(0, 0, 255, ' + Math.random() + ')';
      console.log(ctx.fillStyle);
    }
    ctx.fillRect(initialX + (indent + barWidth) * i, initialY + histogramHeight, barWidth, -(times[i] * step));
    ctx.fillStyle = '#222222';
    ctx.fillText(names[i], initialX + (indent + barWidth) * i, initialY + histogramHeight + lineHeight);
    ctx.fillText(times[i].toFixed(), initialX + (indent + barWidth) * i, initialY + histogramHeight - times[i] * step - lineHeight / 2);
  }
};


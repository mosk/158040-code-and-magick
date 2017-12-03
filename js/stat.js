'use strict';

window.renderStatistics = function (ctx, names, times) {
  var WIDTH_BLOCK_RESULTS = 420;
  var HEIGHT_BLOCK_RESULTS = 270;
  var INITIAL_X_BLOCK_RESULTS = 100;
  var INITIAL_Y_BLOCK_RESULTS = 10;
  var OFFSET_X = 10;
  var OFFSET_Y = 10;
  var INITIAL_X = 120;
  var INITIAL_Y = 90;
  var LINE_HEIGHT = 20;
  var BAR_WIDTH = 40;
  var HISTOGRAM_HEIGHT = 150;
  var INITIAL_X_TEXT = 120;
  var INITIAL_Y_TEXT = 40;

  var getRandomNumber = function (min, max) {
    if (min === undefined) {
      min = 0;
    }

    if (max === undefined) {
      max = 1;
    }

    return Math.random() * (max - min) + min;
  }

  var drawRectangle = function() {
    for (var i = 0; i < times.length; i++) {
      names[i] === 'Вы' ?
        ctx.fillStyle = 'rgba(255, 0, 0, 1)' :
        ctx.fillStyle = 'rgba(0, 0, 255, ' + getRandomNumber() + ')';
      ctx.fillRect(INITIAL_X + (indent + BAR_WIDTH) * i, INITIAL_Y + HISTOGRAM_HEIGHT, BAR_WIDTH, -(times[i] * step));
    }
  }

  var drawText = function() {
    for (var i = 0; i < times.length; i++) {
      ctx.fillText(names[i], INITIAL_X + (indent + BAR_WIDTH) * i, INITIAL_Y + HISTOGRAM_HEIGHT + LINE_HEIGHT);
      ctx.fillText(times[i].toFixed(), INITIAL_X + (indent + BAR_WIDTH) * i, INITIAL_Y + HISTOGRAM_HEIGHT - times[i] * step - LINE_HEIGHT / 2);
    }
  }

  var getMaxInArray = function (arrayName) {
    var max = -1;
    for (var i = 0; i < arrayName.length; i++) {
      var number = arrayName[i];
      if (number > max) {
        max = number;
      }
    }

    return max;
  };

  var maxTime = getMaxInArray (times);
  var step = HISTOGRAM_HEIGHT / maxTime;
  var indent = (WIDTH_BLOCK_RESULTS / times.length - BAR_WIDTH);

  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(INITIAL_X_BLOCK_RESULTS + OFFSET_X, INITIAL_Y_BLOCK_RESULTS + OFFSET_Y, WIDTH_BLOCK_RESULTS, HEIGHT_BLOCK_RESULTS);

  ctx.fillStyle = 'rgb(255, 255, 255)';
  ctx.fillRect(INITIAL_X_BLOCK_RESULTS, INITIAL_Y_BLOCK_RESULTS, WIDTH_BLOCK_RESULTS, HEIGHT_BLOCK_RESULTS);

  ctx.fillStyle = '#222222';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', INITIAL_X_TEXT, INITIAL_Y_TEXT);
  ctx.fillText('Список результатов:', INITIAL_X_TEXT, INITIAL_Y_TEXT + LINE_HEIGHT);

  drawText();
  drawRectangle();
};

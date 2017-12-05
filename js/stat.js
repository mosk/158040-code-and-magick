'use strict';

window.renderStatistics = function (ctx, names, times) {
  var WIDTH_BLOCK_RESULTS = 420;
  var HEIGHT_BLOCK_RESULTS = 270;
  var INITIAL_X_BLOCK_RESULTS = 100;
  var INITIAL_Y_BLOCK_RESULTS = 10;
  var OFFSET = 10;

  var INITIAL_X = 120;
  var INITIAL_Y = 90;
  var LINE_HEIGHT = 20;
  var BAR_WIDTH = 40;
  var HISTOGRAM_HEIGHT = 150;

  var INITIAL_X_TEXT = 120;
  var INITIAL_Y_TEXT = 40;
  var FONT_STYLE = '16px PT Mono';
  var FONT_COLOR = '#222222';

  var getRandomNumber = function (min, max) {
    return Math.random() * (max - min) + min;
  };

  var drawRect = function (initialX, initialY, width, height, rectColor, shadowOffsetX, shadowOffsetY, shadowColor) {
    ctx.fillStyle = shadowColor;
    ctx.fillRect(initialX + shadowOffsetX, initialY + shadowOffsetY, width, height);

    ctx.fillStyle = rectColor;
    ctx.fillRect(initialX, initialY, width, height);
  };

  var drawText = function (text, initialX, initialY, color, font) {
    ctx.fillStyle = color;
    ctx.font = font;
    ctx.fillText(text, initialX, initialY);
  };

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

  var MAX_TIME = getMaxInArray(times);
  var STEP = HISTOGRAM_HEIGHT / MAX_TIME;
  var INDENT = (WIDTH_BLOCK_RESULTS / times.length - BAR_WIDTH);

  drawRect(INITIAL_X_BLOCK_RESULTS, INITIAL_Y_BLOCK_RESULTS, WIDTH_BLOCK_RESULTS, HEIGHT_BLOCK_RESULTS, 'rgb(255, 255, 255)', OFFSET, OFFSET, 'rgba(0, 0, 0, 0.7)');

  drawText('Ура вы победили!', INITIAL_X_TEXT, INITIAL_Y_TEXT, FONT_COLOR, FONT_STYLE);
  drawText('Список результатов:', INITIAL_X_TEXT, INITIAL_Y_TEXT + LINE_HEIGHT, FONT_COLOR, FONT_STYLE);

  for (var i = 0; i < times.length; i++) {
    var colorRectangle = (names[i] === 'Вы') ?
      'rgba(255, 0, 0, 1)' :
      'rgba(0, 0, 255, ' + getRandomNumber(0.4, 0.9) + ')';

    drawRect(INITIAL_X + (INDENT + BAR_WIDTH) * i, INITIAL_Y + HISTOGRAM_HEIGHT, BAR_WIDTH, -(times[i] * STEP), colorRectangle);

    drawText(names[i], INITIAL_X + (INDENT + BAR_WIDTH) * i, INITIAL_Y + HISTOGRAM_HEIGHT + LINE_HEIGHT, FONT_COLOR);
    drawText(times[i].toFixed(), INITIAL_X + (INDENT + BAR_WIDTH) * i, INITIAL_Y + HISTOGRAM_HEIGHT - times[i] * STEP - LINE_HEIGHT / 2, FONT_COLOR);
  }
};

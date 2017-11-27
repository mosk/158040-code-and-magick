'use strict';

window.renderStatistics = function (ctx, names, times) {
  ctx.rotate(-1 * Math.PI / 180);

  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);

  ctx.fillStyle = 'rgba(256, 256, 256, 1)';
  ctx.fillRect(100, 10, 420, 270);

  ctx.fillStyle = 'red';
  ctx.font = '16px PT Mono';

  ctx.fillText('Ура вы победили!', 120, 40);

  var max = -1;

  for(var i = 0 ; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
    }
  }

  ctx.fillText('Худшее время: ' + max, 120, 64)

  ctx.fillText('Список результатов:', 120, 88);
};


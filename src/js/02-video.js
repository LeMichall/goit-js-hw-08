import Player from '@vimeo/player';
var throttle = require('lodash.throttle');
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

function updateTimer(data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
}

function setTimer() {
  player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
}
player.on('timeupdate', throttle(updateTimer, 1000));

iframe.addEventListener('load', setTimer);

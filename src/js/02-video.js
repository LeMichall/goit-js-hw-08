import Player from '@vimeo/player';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('play', function () {
  console.log('played the video');
});
player.on('timeupdate', () => {
  console.log('update');
});
player.on('pause', () => {
  console.log('paused the video');
});

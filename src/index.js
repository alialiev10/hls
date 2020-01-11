import streamService from './service/stream.service';
import animationService from './service/animation.service';

const scaleRate = prompt('Введите коэффициент увеличения квадрата. Начальный размер квадрата 50x50 px');
const video = document.getElementById('video');
const square = document.getElementById('square');

streamService.connect(video).then(() => {
  animationService.moveToTopRightCornerWithScale(square, video, scaleRate);
});

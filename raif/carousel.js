//carousel VV

let width = 254;
let count = 4;

let list = carousel.querySelector('.images');
let listElems = carousel.querySelectorAll('article');

let position = 0;

carousel.querySelector('.prev').onclick = function () {
  position += width;
  position = Math.min(position, 0)
  list.style.marginLeft = position + 'px';
};

carousel.querySelector('.next').onclick = function () {
  position -= width;
  position = Math.max(position, -width * (listElems.length - count));
  list.style.marginLeft = position + 'px';
};

//carousel ^^
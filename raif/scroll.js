//scroll VV

let scrollBtn = document.querySelector('.hero__button');

window.onscroll = function () {
  if (window.pageYOffset > 3250 || window.pageYOffset < 2050) {
    scrollBtn.classList.remove('hidden');
  }
  else {
    scrollBtn.classList.add('hidden');
  }
};
//scroll ^^
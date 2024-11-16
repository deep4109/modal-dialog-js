'use strict';

const model = document.querySelector('.modal');
console.log(model.classList);
const overlay = document.querySelector('.overlay');
const btnClose = document.querySelector('.close-modal');

const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', function () {
    model.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
}

btnClose.addEventListener('click', function () {
  model.classList.add('hidden');
  overlay.classList.add('hidden');
});

overlay.addEventListener('click', function () {
  model.classList.add('hidden');
  overlay.classList.add('hidden');
});

document.addEventListener('keydown', function (e) {
  console.log(e);
  if (e.key === 'Escape') {
    if (!model.classList.contains('hidden')) {
      model.classList.add('hidden');
      overlay.classList.add('hidden');
    }
  }
});

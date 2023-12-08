const btnShow = document.querySelectorAll('.show-modal');

const mainDisplay1 = document.querySelector('.modal-1');
const mainDisplay2 = document.querySelector('.modal-2');
const mainDisplay3 = document.querySelector('.modal-3');

const btnCloseModal = document.querySelectorAll('.close-modal');

const overlayAll = document.querySelector('.overlay');

for (let i = 0; i < btnShow.length; i++) {
  btnShow[btnShow.length - 3].addEventListener('click', function () {
    mainDisplay1.classList.remove('hidden-1');
    overlayAll.classList.remove('hidden-overlay');
  });
  btnShow[btnShow.length - 2].addEventListener('click', function () {
    mainDisplay2.classList.remove('hidden-2');
    overlayAll.classList.remove('hidden-overlay');
  });
  btnShow[btnShow.length - 1].addEventListener('click', function () {
    mainDisplay3.classList.remove('hidden-3');
    overlayAll.classList.remove('hidden-overlay');
  });
}

for (let i = 0; i < btnCloseModal.length; i++) {
  btnCloseModal[i].addEventListener('click', function () {
    mainDisplay1.classList.add('hidden-1');
    overlayAll.classList.add('hidden-overlay');
    mainDisplay2.classList.add('hidden-2');
    overlayAll.classList.add('hidden-overlay');
    mainDisplay3.classList.add('hidden-3');
    overlayAll.classList.add('hidden-overlay');
  });
}

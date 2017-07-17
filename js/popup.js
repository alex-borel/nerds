const openModal = document.querySelector('.google-map .btn');
const myModal = document.querySelector('.modal-content');
const closeModal = document.querySelector('.modal-content-close');
const overlay = document.querySelector('.modal-overlay');
openModal.addEventListener('click', function (event) {
    event.preventDefault();
    myModal.classList.add('show-modal');
    overlay.classList.add('show-overlay');
});

closeModal.addEventListener('click', function (event) {
    event.preventDefault();
    myModal.classList.remove('show-modal');
    overlay.classList.remove('show-overlay');
})

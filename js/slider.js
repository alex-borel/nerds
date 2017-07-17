const slide1 = document.getElementById('slide-1');
const slide2 = document.getElementById('slide-2');
const slide3 = document.getElementById('slide-3');
const one = document.querySelector('.slide-one');
const two = document.querySelector('.slide-two');
const three = document.querySelector('.slide-three');
const form = document.querySelector('form');

let nowSlide = one;

form.addEventListener('click', changeSlide);

function changeSlide(event) {
    console.log(nowSlide);
    switch (event.target) {
        case slide1:
            nowSlide.classList.remove('show');
            nowSlide = one;
            break;
        case slide2:
            nowSlide.classList.remove('show');
            nowSlide = two;
            break;
        case slide3:
            nowSlide.classList.remove('show');
            nowSlide = three;
            break;
        default:
            console.log('mimo');
    }
    console.log(nowSlide);
    nowSlide.classList.add('show');

}

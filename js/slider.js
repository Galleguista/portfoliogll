// -----------> Slider <-------------

const slider = document.querySelector('#slider');
let sliderSection = document.querySelectorAll('.slider--child');
let sliderLastSection = sliderSection[sliderSection.length - 1];

const rightBtn = document.querySelector('#right-btn');
const leftBtn = document.querySelector('#left-btn');

slider.insertAdjacentElement('afterbegin', sliderLastSection);

function Next() {
    let sliderFirstSection = document.querySelectorAll('.slider--child')[0];
    slider.style.marginLeft = '-200%';
    slider.style.transition = 'margin-left 1s';
    setTimeout(function() {
        slider.style.transition = 'none';
        slider.insertAdjacentElement('beforeend', sliderFirstSection);
        slider.style.marginLeft = '-100%';
    }, 1000);
}

function Prev() {
    let sliderSection = document.querySelectorAll('.slider--child');
    let sliderLastSection = sliderSection[sliderSection.length - 1];
    slider.style.marginLeft = '0';
    slider.style.transition = 'margin-left 1s';
    setTimeout(function() {
        slider.style.transition = 'none';
        slider.insertAdjacentElement('afterbegin', sliderLastSection);
        slider.style.marginLeft = '-100%';
    }, 1000);
}

rightBtn.addEventListener('click', Next);
leftBtn.addEventListener('click', Prev);

setInterval(Next, 4000); // Comment this line if you don't want the slider to be automatic
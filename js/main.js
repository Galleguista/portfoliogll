const openBtn = document.querySelector('#open-btn');
const closeBtn = document.querySelector('#close-btn');
const hamburgerMenu = document.querySelector('#hamburger-menu');


function showMenu() {
    hamburgerMenu.style.display = 'block';
}

function hideMenu() {
    hamburgerMenu.style.display = 'none';
}

openBtn.addEventListener('click', showMenu);
closeBtn.addEventListener('click', hideMenu);
//popup

let popup = document.getElementById('overlay');
let popupClose = document.getElementById('popup-close');
let headerButton = document.getElementById('btn1');

function popupShow() {
    popup.style.display = "block";
}

function popupHide() {
    popup.style.display = "none";
}


headerButton.addEventListener('click', popupShow);
popupClose.addEventListener('click', popupHide);

// end popup

// adaptive menu

// let menuClosed = document.querySelector('#menu');
let menuOpen = document.querySelector('.menu-adaptive');
let open = document.querySelector('#menu');


function showMenu() {
    if (menuOpen.style.display == 'none') {
        menuOpen.style.display = 'block';
    } else {
        menuOpen.style.display = 'none';
    }
}

open.addEventListener('click', showMenu);

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

// menu w320

let width = document.documentElement.clientWidth;
let addIdW320 = document.getElementById('menu-w320');
let overlayW320 = document.getElementById('overlay-width320');

if (screen.width <= 320 || width <= 320) {
    addIdW320.id = "w320";
    w320.style.display = "none";
    // overlayW320.id = "overlayW320";
} 

let menu320 = document.getElementById('w320');
let menuButton320 = document.getElementById('nav-w320');

function menuShow320() {
    if (menu320.style.display == "none" && overlayW320.style.display == "none") {
        menu320.style.display = "block";
        overlayW320.style.display = "block";
    } else {
        menu320.style.display = "none";
        overlayW320.style.display = "none";
    }
    
}

menuButton320.addEventListener('click', menuShow320);

// end menu-w320

// overlay-w320



// end overlay-w320

// let popup320 = document.getElementById('overlay-w320');
// let popupw320 = document.getElementById('popup-w320');
// let popup320Close = document.getElementById('popup-w320__close');
// let w320 = document.getElementById('tel-w320');

// function popupShow320() {
//     popup320.style.display = "block";
//     popupw320.style.display = "block";
// }

// function popupHide320() {
//     popup320.style.display = "none";
//     popupw320.style.display = "none";
// }

// function popupShow320() {
//         popup320.style.display = "block";
//         popupw320.style.display = "block";
//     }


// w320.addEventListener('click', popupShow320);
// popup320Close.addEventListener('click', popupHide320);


// popup w768


// let width768 = document.documentElement.clientWidth;

// if (screen.width <= 768 || width <= 768) {
//     popupShow768();
// } 

// let popup768 = document.getElementById('overlay-w768');
// let popupw768 = document.getElementById('popup-w768');
// let popup768Close = document.getElementById('popup-w768__close');
// let w768 = document.getElementById('tel-w768');

// function popupShow768() {
//     popup768.style.display = "block";
//     popupw768.style.display = "block";
// }

// function popupHide768() {
//     popup768.style.display = "none";
//     popupw768.style.display = "none";
// }


// w768.addEventListener('click', popupShow768);
// popup768Close.addEventListener('click', popupHide768);

// menu w768

// let width = document.documentElement.clientWidth;

// if (screen.width <= 768 || width <= 768) {
//     popupShow320();
// } 

let menu = document.getElementById('menu-w768');
let menuButton = document.getElementById('nav-w768');

function menuShow() {
    if (menu.style.display == "none") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
    
}

menuButton.addEventListener('click', menuShow);
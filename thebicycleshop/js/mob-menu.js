
let mobMenu = document.querySelector('.title');
let layer = document.querySelector('.layer');

mobMenu.onclick = function() {
    if (layer.style.display === 'none') {
        layer.style.display = 'block';
        mobMenu.style.zIndex = '6';
    } else {
        layer.style.display = 'none';
    } 
}


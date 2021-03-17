const app = document.querySelector('.grid')

//field blocks
const a = document.querySelector('.a');
const b = document.querySelector('.b');
const c = document.querySelector('.c');
const d = document.querySelector('.d');
const e = document.querySelector('.e');
const f = document.querySelector('.f');
const g = document.querySelector('.g');
const h = document.querySelector('.h');
const i = document.querySelector('.i');

//buttons
const x = document.querySelector('.x-button');
const o = document.querySelector('.o-button');

//block title
const div = document.createElement('div');
div.className = 'titleApp'
div.innerHTML = 'X0'
document.body.prepend(div)

//flag win
let win = false;

//popUp
function popUp(title) {
    if (title === 'close') {
        console.log('popup closed');
        return;
    }
    let layer = document.createElement('div');
    let popup = document.createElement('div');
    let popupTitle = document.createElement('div');
    let popupButton = document.createElement('div');
    let body = document.querySelector('body');
    layer.className = 'layer';
    popup.className = 'popup';
    popupTitle.className = 'popupTitle';
    popupButton.className = 'popupButton';
    body.prepend(layer);
    layer.prepend(popup);
    popup.prepend(popupTitle);
    popup.append(popupButton);
    popupTitle.innerText = `${title}`;
    popupButton.innerText = 'Click';
    popupButton.addEventListener('click', () => {
        location.reload();
    })
}


//numbers steps
let step = 0;


function go(player) {
    console.log(`${'Первым ходит ' + player}`)
    app.addEventListener('click', (event) => {
        let position = event.target;
        if (position.classList.contains('x') || position.classList.contains('o')) {
            if (player === 'x') {
                console.log('Клетка не пуста! Тут 0');
            } else {
                console.log('Клетка не пуста! Тут X');
            }
            return;
        }
        position.innerHTML = `${player}`;
        position.classList.add(`${player}`);
        winX();
        winO();
        countSteps();
        position.dataComplete = 'completed';
        if (player === 'x') {
            console.log('Переключаюсь на 0');
        } else {
            console.log('Переключаюсь на X');
        }
        if (player === 'x') {
            player = 'o';
        } else {
            player = 'x';
        }
    })
}


function winX() {
    if (a.classList.contains('x') && b.classList.contains('x') && c.classList.contains('x')) {
        a.classList.add('winX')
        b.classList.add('winX')
        c.classList.add('winX')
        win = true;
        app.classList.add('pe')
        popUp('Крестики выиграли');
    }
    if (d.classList.contains('x') && e.classList.contains('x') && f.classList.contains('x')) {
        d.classList.add('winX')
        e.classList.add('winX')
        f.classList.add('winX')
        win = true;
        app.classList.add('pe')
        popUp('Крестики выиграли');
    }
    if (g.classList.contains('x') && h.classList.contains('x') && i.classList.contains('x')) {
        g.classList.add('winX')
        h.classList.add('winX')
        i.classList.add('winX')
        win = true;
        app.classList.add('pe')
        popUp('Крестики выиграли');
    }
    if (a.classList.contains('x') && d.classList.contains('x') && g.classList.contains('x')) {
        a.classList.add('winX')
        d.classList.add('winX')
        g.classList.add('winX')
        win = true;
        app.classList.add('pe')
        popUp('Крестики выиграли');
    }
    if (b.classList.contains('x') && e.classList.contains('x') && h.classList.contains('x')) {
        b.classList.add('winX')
        e.classList.add('winX')
        h.classList.add('winX')
        win = true;
        app.classList.add('pe')
        popUp('Крестики выиграли');
    }
    if (c.classList.contains('x') && f.classList.contains('x') && i.classList.contains('x')) {
        c.classList.add('winX')
        f.classList.add('winX')
        i.classList.add('winX')
        win = true;
        app.classList.add('pe')
        popUp('Крестики выиграли');
    }
    if (a.classList.contains('x') && e.classList.contains('x') && i.classList.contains('x')) {
        a.classList.add('winX')
        e.classList.add('winX')
        i.classList.add('winX')
        win = true;
        app.classList.add('pe')
        popUp('Крестики выиграли');
    }
    if (g.classList.contains('x') && e.classList.contains('x') && c.classList.contains('x')) {
        g.classList.add('winX')
        e.classList.add('winX')
        c.classList.add('winX')
        win = true;
        app.classList.add('pe')
        popUp('Крестики выиграли');
    }
}

function winO() {
    if (a.classList.contains('o') && b.classList.contains('o') && c.classList.contains('o')) {
        a.classList.add('winO')
        b.classList.add('winO')
        c.classList.add('winO')
        win = true;
        app.classList.add('pe')
        popUp('Нолики выиграли');
    }
    if (d.classList.contains('o') && e.classList.contains('o') && f.classList.contains('o')) {
        d.classList.add('winO')
        e.classList.add('winO')
        f.classList.add('winO')
        win = true;
        app.classList.add('pe')
        popUp('Нолики выиграли');
    }
    if (g.classList.contains('o') && h.classList.contains('o') && i.classList.contains('o')) {
        g.classList.add('winO')
        h.classList.add('winO')
        i.classList.add('winO')
        win = true;
        app.classList.add('pe')
        popUp('Нолики выиграли');
    }
    if (a.classList.contains('o') && d.classList.contains('o') && g.classList.contains('o')) {
        a.classList.add('winO')
        d.classList.add('winO')
        g.classList.add('winO')
        win = true;
        app.classList.add('pe')
        popUp('Нолики выиграли');
    }
    if (b.classList.contains('o') && e.classList.contains('o') && h.classList.contains('o')) {
        b.classList.add('winO')
        e.classList.add('winO')
        h.classList.add('winO')
        win = true;
        app.classList.add('pe')
        popUp('Нолики выиграли');
    }
    if (c.classList.contains('o') && f.classList.contains('o') && i.classList.contains('o')) {
        c.classList.add('winO')
        f.classList.add('winO')
        i.classList.add('winO')
        win = true;
        app.classList.add('pe')
        popUp('Нолики выиграли');
    }
    if (a.classList.contains('o') && e.classList.contains('o') && i.classList.contains('o')) {
        a.classList.add('winO')
        e.classList.add('winO')
        i.classList.add('winO')
        win = true;
        app.classList.add('pe')
        popUp('Нолики выиграли');
    }
    if (g.classList.contains('o') && e.classList.contains('o') && c.classList.contains('o')) {
        g.classList.add('winO')
        e.classList.add('winO')
        c.classList.add('winO')
        win = true;
        app.classList.add('pe')
        popUp('Нолики выиграли');
    }
}

function countSteps() {
    step++;
    if (step === 9 && win === false) {
        console.log('Nobody win');
        popUp('Ничья');
        app.classList.add('pe');
        app.style.background = '#323232';
        app.style.color = '#ffffff';
    }
}








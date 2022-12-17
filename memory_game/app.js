let app = document.querySelector('#app');
let button = document.querySelector('.button')

let arrImg = ['./img/1.jpg', './img/2.jpg', './img/3.jpg', './img/4.jpg', './img/5.jpg', './img/6.jpg', './img/7.jpg', './img/8.jpg', './img/9.jpg']

shuffle(arrImg)

function setFieldsBlocks() {
    let arr = [];
    let imgSrc = 0
    let dataBackground = 0
    let dataCheck = 0
    let dataImg = 0
    for (let i = 0; i < 4; i++) {
        arr[i] = []
        for (let j = 0; j < 4; j++) {
            imgSrc++
            dataBackground++
            dataCheck++
            dataImg++
            if (imgSrc === 8) {
                imgSrc = 0
            }
            // if (dataBackground === 8) {
            //     dataBackground = 0
            // }
            if (dataCheck === 8) {
                dataCheck = 0
            }
            if (dataImg === 8) {
                dataImg = 0
            }
            let wrap = document.createElement('div');
            let block = document.createElement('img');
            block.src = arrImg[imgSrc]
            block.classList = `img`;
            wrap.classList = `background`
            wrap.setAttribute('data-background', `${dataBackground}`)
            wrap.setAttribute('data-check', `${dataCheck}`)
            block.setAttribute('data-img', `${dataImg}`)
            app.appendChild(wrap);
            wrap.appendChild(block)
        }
    }
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function selectImg() {
    let arrNumbersBackground = []
    let arrCheck = []
    let total = 0
    let field = document.querySelectorAll('.background').length
    for (let i = 0; i < field; i++) {
        document.getElementsByClassName('background')[i].onclick = function() {
            this.classList.remove('background')
            arrNumbersBackground.push(this.dataset.background)
            arrCheck.push(this.dataset.check)
            console.log(`arrCheck - ${arrCheck}`)
            let el = document.querySelector(`[data-background='${arrNumbersBackground[0]}']`);
            if (arrNumbersBackground.length === 2) {
                this.classList.remove('background')
                let el2 = document.querySelector(`[data-background='${arrNumbersBackground[1]}']`);
                if (arrCheck[0] === arrCheck[1]) {
                    total += 2
                    console.log('match')
                    setTimeout(() => {
                        let el3 = document.querySelectorAll(`[data-check='${arrCheck[0]}']`);
                        for (let i = 0; i < el3.length; i++) {
                            el3[i].classList.add('match')
                        }
                        arrCheck = []
                        arrNumbersBackground = []
                    }, "1000");
                } else {
                    console.log('not match')
                    setTimeout(() => {
                        if (el.classList.contains('background')) {
                            console.log('contains')
                        } else {
                            console.log('not contains')
                            el.classList.add('background')
                        }
                        if (el2.classList.contains('background')) {
                            console.log('contains')
                        } else {
                            console.log('not contains')
                            el2.classList.add('background')
                        }
                        // el.classList.add('background')
                        // el2.classList.add('background')
                        arrCheck = []
                        arrNumbersBackground = []
                    }, "1000");
                }
            }

            if (total === 16) {
                setTimeout(() => {
                    let blockWin = document.createElement('div')
                    blockWin.classList = 'win'
                    blockWin.textContent = 'You win!!!'
                    app.appendChild(blockWin)
                    button.classList.remove('dn')
                }, "1000");
            }

            button.addEventListener('click', function() {
                location.reload();
            });

            console.log(`arrNumbersBackground - ${arrNumbersBackground}`)
            console.log(`total - ${total}`)
            return false
        }
    }
}

setFieldsBlocks()
selectImg()







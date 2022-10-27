const cols = document.querySelectorAll('.col');
const texts = document.querySelectorAll('h2');
const buttons = document.querySelectorAll('button');

document.addEventListener('keydown', event => {
    event.preventDefault();
    if (event.code.toLowerCase() === 'space') {
        setRandomColors();
    }
})

const generateRandomColor = () => {

    const hexCodes = '0123456789ABCDEF';
    let color = '';

    for (let i = 0; i < 6; i++) {
        color += hexCodes[Math.floor(Math.random() * hexCodes.length)]
    }
    return '#' + color;
}

const setRandomColors = (isInitial) => {
    const colors = isInitial ? getColorsFromHash() : [];

    cols.forEach((col, index) => {
        const isLocked = col.querySelector('i').classList.contains('fa-lock');

        const text = col.querySelector('h2');
        const button = col.querySelector('button');

        if (isLocked) {
            colors.push(text.textContent);
            return;
        }

        const color = isInitial
            ? colors[index]
                ? colors[index]
                : generateRandomColor()
            : generateRandomColor();

        if (!isInitial) {
            colors.push(color);
        }
        
        col.style.backgroundColor = color;

        text.textContent = color;

        setTextColor(text, color);
        setTextColor(button, color);
    })

    updateColorsHash(colors);
}

const buttonClickHandler = () => {
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            button.querySelector('i').classList.toggle('fa-lock-open');
            button.querySelector('i').classList.toggle('fa-lock');
        })
    })
}

const textClickHandler = () => {
    texts.forEach(text => {
        text.addEventListener('click', () => {
            let content = text.textContent;
            copyToClipboard(content);
        })
    })
}

const setTextColor = (text, color) => {
    const luminance = chroma(color).luminance();
    text.style.color = luminance > 0.5 ? 'black' : 'white';
}

const copyToClipboard = (text) => {
    return navigator.clipboard.writeText(text);
}

const updateColorsHash = (colors = []) => {
    document.location.hash = colors.map(color => {
        return color.toString().substring(1)
    }).join('-');
}

const getColorsFromHash = () => {
    if (document.location.hash.length > 1) {
        return document.location.hash.substring(1).split('-').map((color) => '#' + color);
    }
    return [];
}

setRandomColors(true);
buttonClickHandler();
textClickHandler();


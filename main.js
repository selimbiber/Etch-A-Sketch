const MENU_SECTION = document.getElementById('menu-section')
    const GRID_COUNT_SELECT = document.getElementById('grid-sizes')
    const PEN_COLOR_INPUT = document.getElementById('pen-color')
    const THEME_COLOR_INPUT = document.getElementById('theme-color')
    const RAINBOW_MODE_BTN = document.getElementById('rainbow-mode')
    const DEFAULT_MODE_BTN = document.getElementById('default-mode')
    const ERASER_BTN = document.getElementById('eraser-btn')
    const CLEAR_BTN = document.getElementById('clear-btn')
const GRID_SECTION = document.getElementById('grid-section')

const DEFAULT_GRID_COUNT = 16;
const DEFAULT_PEN_COLOR = '#2b2b2b';
const DEFAULT_THEME_COLOR = '#ffffff';

let currentGridCount = DEFAULT_GRID_COUNT;
let currentPenColor = DEFAULT_PEN_COLOR;
let currentThemeColor = DEFAULT_THEME_COLOR;

let currentColorMode;
let activeButton;

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

// Events

GRID_COUNT_SELECT.onchange = (x) => changeCountOfGrid(x.target.value);

THEME_COLOR_INPUT.oninput = (t) => setCurrentThemeColor(t.target.value);

PEN_COLOR_INPUT.oninput = (p) => setCurrentPenColor(p.target.value), currentColorMode = 'penColorMode';

RAINBOW_MODE_BTN.onclick = () => {currentColorMode = 'rainbowColorMode', setCurrentActivateButton(currentColorMode)};

DEFAULT_MODE_BTN.onclick = () => {currentColorMode = 'defaultColorMode', setCurrentActivateButton(currentColorMode)};

ERASER_BTN.onclick = () => {currentColorMode = 'eraserColorMode', setCurrentActivateButton(currentColorMode)};

CLEAR_BTN.onclick = () => reloadGrid();

// Main Function

    function createGrid(countOfGrids) {
        for (let row = 0; row < countOfGrids; row++) {
            const GRID_ROW = document.createElement('div')
            GRID_ROW.setAttribute('class', 'grid-row')

            for (let box = 0; box < countOfGrids; box++) {
                const GRID_BOX = document.createElement('div')
                GRID_BOX.setAttribute('class', 'grid-box')
                GRID_ROW.appendChild(GRID_BOX)

                GRID_BOX.addEventListener('mouseover', changePenColor);
                GRID_BOX.addEventListener('mousedown', changePenColor);

                function setSizeOfGrid(value) {
                    GRID_BOX.style.height = value;
                    GRID_BOX.style.width = value;
                }

                switch (countOfGrids) {
                    case '4':
                        setSizeOfGrid('8rem')
                        break;
                    case '8':
                        setSizeOfGrid('4rem')
                        break;
                    case '12':
                        setSizeOfGrid('2.66rem')
                        break;
                    case '16':
                        setSizeOfGrid('2rem')
                        break;
                    case '24':
                        setSizeOfGrid('1.33rem')
                        break;
                    case '32':
                        setSizeOfGrid('1rem')
                        break;
                    case '40':
                        setSizeOfGrid('.8rem')
                        break;
                    case '64':
                        setSizeOfGrid('.5rem')
                        break;
                    case '96':
                        setSizeOfGrid('.333rem')
                        break;
                }
            }
            GRID_SECTION.appendChild(GRID_ROW)
        }
    }

// Helper Functions

    function setCurrentCountOfGrid(newGridCount) {
        currentGridCount = newGridCount;
    }

    function setCurrentPenColor(newPenColor) {
        currentPenColor = newPenColor;
    }

    function setCurrentThemeColor(newThemeColor) {
        currentThemeColor = newThemeColor;
        GRID_SECTION.style.backgroundColor = currentThemeColor
    }

    function changeCountOfGrid(value) {
        setCurrentCountOfGrid(value)
        reloadGrid()
        setCurrentThemeColor(currentThemeColor);
    }

    function reloadGrid() {
        clearGrid();

        RAINBOW_MODE_BTN.classList = '';
        DEFAULT_MODE_BTN.classList = '';
        RAINBOW_MODE_BTN.classList = '';
        ERASER_BTN.classList = '';

        createGrid(currentGridCount);
    }

    function clearGrid() {
        GRID_SECTION.innerHTML = '';
    }

    function changePenColor(event) {
        if (event.type === 'mouseover' && !mouseDown) 
        return
        if (currentColorMode === 'penColorMode') {
            event.target.style.backgroundColor = currentPenColor;
        } else if (currentColorMode === 'rainbowColorMode') {
            const randomR = Math.floor(Math.random() * 256)
            const randomG = Math.floor(Math.random() * 256)
            const randomB = Math.floor(Math.random() * 256)
            event.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
        } else if (currentColorMode === 'defaultColorMode') {
            event.target.style.backgroundColor = currentPenColor
        } else if (currentColorMode === 'eraserColorMode') {
            event.target.style.backgroundColor = currentThemeColor
        }
    }

    function setCurrentActivateButton(newMode) {
        if (newMode === 'rainbowColorMode') {
        RAINBOW_MODE_BTN.classList.add('active-btn')

        DEFAULT_MODE_BTN.classList = '';
        ERASER_BTN.classList = '';

        } else if (newMode === 'defaultColorMode') {
        DEFAULT_MODE_BTN.classList.add('active-btn')

        RAINBOW_MODE_BTN.classList = '';
        ERASER_BTN.classList = '';
        
        } else if (newMode === 'eraserColorMode') {
        ERASER_BTN.classList.add('active-btn')

        DEFAULT_MODE_BTN.classList = '';
        RAINBOW_MODE_BTN.classList = '';
        }
    }

window.addEventListener("DOMContentLoaded", (event) => {
    changeCountOfGrid(DEFAULT_GRID_COUNT)
});
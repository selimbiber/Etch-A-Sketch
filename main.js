const GRID_CONTAINER = document.getElementById('grid-container')

const createGrid = (countOfGrids) => {
    for (let i = 0; i < countOfGrids; i++) {
        const GRID_ROW = document.createElement('div')
        GRID_ROW.setAttribute('class', 'grid-row')
        
        for (let j = 0; j < countOfGrids; j++) {
            const GRID_BOX = document.createElement('div')
            GRID_BOX.setAttribute('class', 'grid-box')
            GRID_ROW.appendChild(GRID_BOX)
            GRID_BOX.addEventListener('mouseenter', () => {
                GRID_BOX.style.backgroundColor = 'black';
            });
        }
        GRID_CONTAINER.appendChild(GRID_ROW)
    }
}

createGrid(16);
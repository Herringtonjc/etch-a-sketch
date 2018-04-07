const gridContainer = document.getElementById("grid-container");
const resetBtn = document.getElementById("reset");
const resizeBtn = document.getElementById("resize");
const borderBtn = document.getElementById("border");

let gridNumber;
let gridSize = 16;
let gridItemBorders = false;

resetBtn.addEventListener("click", resetGrid);
resizeBtn.addEventListener("click", resizeGrid);
borderBtn.addEventListener("click", addBorder);

function createGrid(gridSize) {
    gridNumber = "auto ".repeat(gridSize);
    gridContainer.style.gridTemplateRows = `${gridNumber}`;
    gridContainer.style.gridTemplateColumns = `${gridNumber}`;

    if (!gridItemBorders) {
        for (let i = 0; i < gridSize * gridSize; i++) {
            const gridItem = document.createElement("div");
            gridItem.classList.add("grid-item");
            gridContainer.appendChild(gridItem);
            gridItem.addEventListener("mouseover", colorItem);
        }
    } else {
        for (let i = 0; i < gridSize * gridSize; i++) {
            const gridItem = document.createElement("div");
            gridItem.classList.add("grid-item");
            gridContainer.appendChild(gridItem);
            gridItem.addEventListener("mouseover", colorItem);
            gridItem.style.border = "0.5px solid #000";
        }
    }
}

function colorItem(event) {
    event.target.style.backgroundColor = "#000";
}

function resetGrid() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }

    createGrid(gridSize);
}

function resizeGrid() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }

    gridSize = prompt("Please enter a new size for the grid");
    createGrid(gridSize);
}

function addBorder() {
    if (!gridItemBorders) {
        gridItemBorders = true;
    } else {
        gridItemBorders = false;
    }

    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }

    createGrid(gridSize);
}

createGrid(gridSize);
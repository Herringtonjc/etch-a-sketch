const gridContainer = document.getElementById("grid-container");
const resetBtn = document.getElementById("reset");
const resizeBtn = document.getElementById("resize");

let gridNumber;
let gridSize = 16;

resetBtn.addEventListener("click", resetGrid);
resizeBtn.addEventListener("click", resizeGrid);

function createGrid(gridSize) {
    gridNumber = "auto ".repeat(gridSize);
    gridContainer.style.gridTemplateRows = `${gridNumber}`;
    gridContainer.style.gridTemplateColumns = `${gridNumber}`;

    for (let i = 0; i < gridSize * gridSize; i++) {
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");
        gridContainer.appendChild(gridItem);
        gridItem.addEventListener("mouseover", colorItem);
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

createGrid(gridSize);
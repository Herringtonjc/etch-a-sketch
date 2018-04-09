const gridContainer = document.getElementById("grid-container");
const resetBtn = document.getElementById("reset");
const resizeBtn = document.getElementById("resize");
const borderBtn = document.getElementById("border");
const eraserBtn = document.getElementById("eraser");
const eStatus = document.getElementById("eraser-status");
const cStatus = document.getElementById("colorful-status");
const colorfulBtn = document.getElementById("colorful");

let gridNumber;
let gridSize = 16;
let gridItemBorders = false;
let eraserMode = false;
let colorfulMode = false;

resetBtn.addEventListener("click", resetGrid);
resizeBtn.addEventListener("click", resizeGrid);
borderBtn.addEventListener("click", addBorder);
eraserBtn.addEventListener("click", eraseGrid);
colorfulBtn.addEventListener("click", rainbowGrid)

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
    if (!eraserMode && !colorfulMode) {
    event.target.style.backgroundColor = "#000";
    } else if (!eraserMode && colorfulMode) {
        event.target.style.backgroundColor = "rgb(" + randomColor() + ","  + randomColor() + "," + randomColor() + ")";
    } else {
        event.target.style.backgroundColor = "#fff";
    }
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

function eraseGrid() {
    if (!eraserMode) {
        eraserMode = true;
        eStatus.innerHTML = "Eraser Mode is Active";
    } else {
        eraserMode = false;
        eStatus.innerHTML = "Eraser Mode is Inactive";
    }
}

function randomColor() {
    let randomColor = Math.floor(Math.random() * 257);
    return randomColor;
}

function rainbowGrid() {
    if (!colorfulMode) {
        colorfulMode = true;
        cStatus.innerHTML = "Colorful Mode is Active";
    } else {
        colorfulMode = false;
        cStatus.innerHTML = "Colorful Mode is Inactive";
    }
}

createGrid(gridSize);
const gridContainer = document.getElementById("grid-container");
const status = document.getElementById("status");

const defaultBtn = document.getElementById("default");
const eraserBtn = document.getElementById("eraser");
const rainbowBtn = document.getElementById("colorful");
const pencilBtn = document.getElementById("pencil");

const resetBtn = document.getElementById("reset");
const resizeBtn = document.getElementById("resize");
const borderBtn = document.getElementById("border");

let gridNumber;
let gridSize = 16;
let gridItemBorders = false;
let mode = "default";


defaultBtn.addEventListener("click", defaultGrid);
eraserBtn.addEventListener("click", eraseGrid);
rainbowBtn.addEventListener("click", rainbowGrid);
pencilBtn.addEventListener("click", pencilGrid);

resetBtn.addEventListener("click", resetGrid);
resizeBtn.addEventListener("click", resizeGrid);
borderBtn.addEventListener("click", addBorder);

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
    if (mode === "default") {
        event.target.style.backgroundColor = "#000";
    } else if (mode === "erase") {
        event.target.style.backgroundColor = "#fff";
    } else if (mode === "rainbow") {
        event.target.style.backgroundColor = "rgb(" + randomColor() + ","  + randomColor() + "," + randomColor() + ")";
    } else if (mode === "pencil") {
        /*Need to fix the gradient*/
    } else {
        //This should never be reacher, only used as a fallback
        event.target.style.backgroundColor = "#000";
    }
}

function defaultGrid() {
    mode = "default";
    status.innerHTML = "Default Mode is Active";
}

function eraseGrid() {
    mode = "erase";
    status.innerHTML = "Eraser Mode is Active";
}

function rainbowGrid() {
    mode = "rainbow";
    status.innerHTML = "Rainbow Mode is Active";
}

function pencilGrid() {
    mode = "pencil";
    status.innerHTML = "Pencil Mode is Active";
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
        let squares = document.querySelectorAll(".grid-item");
        squares.forEach(function(square)
    {square.style.border = "0.5px solid #000"});
    } else {
        gridItemBorders = false;
        let squares = document.querySelectorAll(".grid-item");
        squares.forEach(function(square)
    {square.style.border = "none"});
    }
}

function randomColor() {
    let randomColor = Math.floor(Math.random() * 257);
    return randomColor;
}

createGrid(gridSize);
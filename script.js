const gridContainer = document.getElementById("grid-container");

let gridNumber;
let gridSize = 16;

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

createGrid(gridSize);
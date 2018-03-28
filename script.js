const gridContainer = document.getElementById("grid-container");
const createBtn = document.getElementById("create");

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
    }
}

createBtn.addEventListener("click", () => createGrid(gridSize));
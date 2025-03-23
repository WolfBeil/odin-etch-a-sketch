const blocks = document.querySelectorAll(".second-cell").forEach(blocks => blocks.addEventListener("mouseover", () => fill(blocks)));


function fill(block) {
    block.style.backgroundColor = "black";
}

const grid = document.querySelector(".grid");

function createGrid(squares) {
    for (let i = 0; i < squares; i++) {
        const row = document.createElement("div");
        row.classList = "row";
        grid.appendChild(row);
        for (let j = 0; j < squares; j++) {
            const col = document.createElement("div");
            col.classList = "col";
            row.appendChild(col);
        }
    }
}

createGrid(5);
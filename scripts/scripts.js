const grid = document.querySelector(".grid");

function createGrid(squares) {
    for (let i = 0; i < squares; i++) {
        const col = document.createElement("div");
        col.classList = "col";
        grid.appendChild(col);
        for (let j = 0; j < squares; j++) {
            const cell = document.createElement("div");
            cell.classList = "cell";
            col.appendChild(cell);
            cell.addEventListener("mouseover", () => {
                if (isMouseDown) {
                    cell.style.backgroundColor = "black";
                }
            })
        }
    }
}

let isMouseDown = false;

document.addEventListener("mousedown", () => {
    isMouseDown = true;
})

document.addEventListener("mouseup", () => {
    isMouseDown = false;
})

createGrid(64);

const container = document.querySelector(".main-container");

const btn = document.createElement("button");
btn.textContent = "Restart";
btn.addEventListener("click", () => {
    grid.textContent = "";
    let qt = parseInt(prompt("How many rows and colums do you want? (min 8 - max 64)"));
    if (qt > 64) {
        qt = 64;
    } else if (qt <= 8) {
        qt = 8;
    };
    createGrid(qt);
});

container.appendChild(btn);


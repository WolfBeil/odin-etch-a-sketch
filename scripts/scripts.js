const grid = document.querySelector(".grid");

function createGrid(squares) {
    grid.textContent = ""; // This erases the actual grid
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

const input = document.createElement('input');
input.type = "number";
input.placeholder = "Define grid size (8-64)";
input.min = 8;
input.max = 64;

const btn = document.createElement("button");
btn.textContent = "Restart";

btn.addEventListener("click", () => {
    let qt = parseInt((input.value));
    if (qt > 64) {
        qt = 64;
    } else if (qt < 8) {
        qt = 8;
    };
    createGrid(qt);
});

container.appendChild(input);
container.appendChild(btn);


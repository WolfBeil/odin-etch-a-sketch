const blocks = document.querySelectorAll(".second-cell").forEach(blocks => blocks.addEventListener("mouseover", () => fill(blocks)));


function fill(block) {
    block.style.backgroundColor = "black";
}
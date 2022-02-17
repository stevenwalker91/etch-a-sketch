

function drawGrid() {
    //clear down existing grid
    removeGrid();

    //get the latest value from user input
    let squareGrid = userCanvasSize.value;
    const canvas = document.querySelector('.canvas');

    for (let i = 0; i < squareGrid * squareGrid; i++) {
        //create a div for each cell and append it to the canvas
        let div = document.createElement("div");
        div.classList.add(`cell`, `cell-${i}`);
        canvas.append(div);
    }

    //apply how many cells there should be per column based on the user input
    canvas.style.gridTemplateColumns = `repeat(${squareGrid}, 1fr)`;

}

//iterate through each cekk abd remove it from the DOM
function removeGrid() {
    document.querySelectorAll('.cell').forEach(e => e.remove());
}

/*
    set up event listener on hover
    explore if class can provide random colour or if this needs to be done on background colour
    write a function that generates random RGB
*/

const userCanvasSize = document.getElementById('number');
drawGrid();
userCanvasSize.addEventListener('change', drawGrid);
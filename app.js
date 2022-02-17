function orchestrateNewGrid(){ 
    //clear down existing grid
   removeGrid();

   //draw the new grid
   drawGrid();

   //store the cells and listen to them for events
   listenToCells();

}

function drawGrid() {
 
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

//iterate through each cell and remove it from the DOM
function removeGrid() {
    document.querySelectorAll('.cell').forEach(e => e.remove());
}

function listenToCells(){
    //find all the cells
    let canvasCells = document.querySelectorAll('.cell');

    //listen to hover on the cells so we can change colour
    canvasCells.forEach(cell => cell.addEventListener ('mouseenter', colourCell));
}

function colourCell(){
    this.style.backgroundColor = 'black';
}

/*
    set up event listener on hover
    write a function that generates random RGB
*/

const userCanvasSize = document.getElementById('number');

//draw the first grid based on default value
orchestrateNewGrid();

//store the cells so we can add an event listener
let canvasCells = document.querySelectorAll('.cell');


//listen for changes on thee size of the canvas
userCanvasSize.addEventListener('change', orchestrateNewGrid); 


let squareGrid = 20;
let canvas = document.querySelector('.canvas');

for (let i = 0; i < squareGrid * squareGrid; i++) {
    let div = document.createElement("div");
    div.classList.add(`cell`, `cell-${i}`);
    canvas.append(div);
}

/*
    dynamically set the grid based on user input
    set up event listener on hover
    explore if class can provide random colour or if this needs to be done on background colour
    write a function that generates random RGB
*/
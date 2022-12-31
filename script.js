//adding more divs inside container
const container = document.querySelector('#container');
const squareGrid = 256; //size of 16 by 16 grid
for (let i=0; i <= squareGrid; i++) { 
    let div = document.createElement('div');
    container.appendChild(div);
}
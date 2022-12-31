//adding more divs inside container
const container = document.querySelector('.container');
const squareGrid = 256; //size of 16 by 16 grid
for (let i=1; i <= squareGrid; i++) { 
    const div = document.createElement('div');
    div.id = 'square' + i;
    div.className = 'square';
    container.appendChild(div);
}
document.appendChild(container);
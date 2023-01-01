const container = document.querySelector('.container');
const slider = document.getElementById("myRange");
const output = document.getElementById("demo");

const defaultGrid = 32 * 32;
for (let i = 1; i <= defaultGrid; i++) {  //creates 256 square divs
    const newDiv = document.createElement('div');
    newDiv.id = 'square' + i;
    newDiv.className = 'square';
    container.appendChild(newDiv);
}

output.innerHTML = slider.value; //displaying value
slider.oninput = function () { //changes number when slider is moved
    output.innerHTML = this.value;

    const value = (this.value - this.min) / (this.max - this.min) * 100;
    this.style.background = 'linear-gradient(to right, #FFDE55 0%, #74DAE2 ' + value + '%, #fff ' + value + '%, #fff 100%)';

    //adding more divs inside container
    let row = this.value;
    let column = this.value;
    const squareGrid = row * column; //size of 16 by 16 grid

while (container.firstChild) {
    container.removeChild(container.firstChild);
}

for (let i = 1; i <= squareGrid; i++) {  //creates 256 square divs
    const newDiv = document.createElement('div');
    newDiv.id = 'square' + i;
    newDiv.className = 'square';
    container.appendChild(newDiv);

    container.style.gridTemplateColumns = 'repeat(' + this.value +', 1fr)';
}

};


document.appendChild(container);






const container = document.querySelector('.container');
const slider = document.getElementById("myRange");
const output = document.getElementById("demo");

const defaultGrid = 32 * 32;
for (let i = 1; i <= defaultGrid; i++) {  //creates 32 by 32 square divs
    const newDiv = document.createElement('div');
    newDiv.id = 'square' + i;
    newDiv.className = 'square';
    container.appendChild(newDiv);
}

output.innerHTML = slider.value; //displaying value
slider.oninput = function () { //changes number when slider is moved
    output.innerHTML = this.value;

    const value = (this.value - this.min) / (this.max - this.min) * 100; //changges slider color
    this.style.background = 'linear-gradient(to right, #FFDE55 0%, #74DAE2 ' + value + '%, #fff ' + value + '%, #fff 100%)';

//deletes all child elements of container
while (container.firstChild) { 
    container.removeChild(container.firstChild);
}

//adding more divs inside container
const squareGrid = this.value * this.value; //taking slider value to get grid size

for (let i = 1; i <= squareGrid; i++) {  
    const newDiv = document.createElement('div');
    newDiv.id = 'square' + i;
    newDiv.className = 'square';
    container.appendChild(newDiv);

    container.style.gridTemplateColumns = 'repeat(' + this.value +', 1fr)';
}

};


document.appendChild(container);






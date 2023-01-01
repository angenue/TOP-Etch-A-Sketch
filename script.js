//adding more divs inside container
const container = document.querySelector('.container');

const squareGrid = 256; //size of 16 by 16 grid
for (let i = 1; i <= squareGrid; i++) {  //creates 256 square divs
    const newDiv = document.createElement('div');
    newDiv.id = 'square' + i;
    newDiv.className = 'square';
    container.appendChild(newDiv);
}
document.appendChild(container);



var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function () {

    const value = (this.value - this.min) / (thix.max - this.min) * 100;

    this.style.background = 'linear-gradient(to right, #6b8dff 0%, #ff2a5f ' + value + ', #fff ' + value + ', #fff 100%)';
    output.innerHTML = slider.value;
    output.innerHTML = this.value;
};





let currentColor = "#333333";
let mouseDown = false; //for mouse event listeners
const defaultGrid = 32; //grid default value

const container = document.querySelector(".container");
const slider = document.getElementById("myRange");
const output = document.getElementById("demo");
const solidColor = document.getElementById("solid");
const rainbowColor = document.getElementById("rainbow");
const eraseButton = document.getElementById("erase");
const resetButton = document.getElementById("reset").addEventListener("click", resetGrid);

solidColor.oninput = (e) => changeColor(e.target.value);
solidColor.onclick = (e) => changeColor(e.target.value);
rainbowColor.onclick = () => changeColor("rainbow");
eraseButton.onclick = () => changeColor("white");

createGrid(defaultGrid); //creating default grid
output.innerHTML = slider.value + ' x ' + slider.value; //displaying slider value

//changes number when slider is moved and creates new grid
slider.oninput = function () {
  output.innerHTML = this.value +' x ' +this.value; //displays new value
  const value = ((this.value - this.min) / (this.max - this.min)) * 100; //changes slider color
  this.style.background =
    "linear-gradient(to right, #FFDE55 0%, #74DAE2 " + value +"%, #fff " +value +"%, #fff 100%)";

  //deletes all child elements of container in order to make new grid
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  createGrid(this.value); //creating grid with slider value
};

function createGrid(size) {
  //adding more divs inside container
  for (let i = 0; i < size * size; i++) {
    const newDiv = document.createElement("div");
    newDiv.className = "square";
    container.appendChild(newDiv);
  }
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`; //changes row amount
}

container.addEventListener("mousedown", (e) => {
  if (currentColor === "rainbow") {
    e.target.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%`;
  } else {
    e.target.style.backgroundColor = currentColor;
  }
  mouseDown = true;

  container.addEventListener("mouseover", (e) => {
    if (mouseDown) {
      if (currentColor === "rainbow") {
        e.target.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%`;
      } else {
        e.target.style.backgroundColor = currentColor;
      }
    }
  });
});
container.addEventListener("mouseup", () => {
  mouseDown = false;
});

function changeColor(colorChoice) {
  currentColor = colorChoice;
}

//erases grid by changing all divs to white
function resetGrid() {
  container.childNodes.forEach(
    (child) => (child.style.backgroundColor = "white")
  );
}

document.appendChild(container);

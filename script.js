const container = document.querySelector(".container");
const slider = document.getElementById("myRange");
const output = document.getElementById("demo");
const solidColor = document.getElementById("solid")//.addEventListener("click", changeToSolid);
const rainbowColor = document.getElementById("rainbow").addEventListener("click", changeToRainbow);
const eraseButton = document.getElementById("erase").addEventListener("click", eraseGrid);
const resetButton = document.getElementById("reset").addEventListener("click", resetGrid);

changeToDefault(); //default black color
let mouseDown = false; //for mouse event listeners
output.innerHTML = slider.value; //displaying slider value
const defaultGrid = 32 * 32; //grid default value


//creating default grid
for (let i = 1; i <= defaultGrid; i++) { //creates 32 by 32 square divs
  const newDiv = document.createElement("div");
  newDiv.id = "square" + i;
  newDiv.className = "square";
  container.appendChild(newDiv);
};

//changes number when slider is moved and creates new grid
slider.oninput = function () {
  output.innerHTML = this.value; //displays new value
  const value = ((this.value - this.min) / (this.max - this.min)) * 100; //changes slider color
  this.style.background = "linear-gradient(to right, #FFDE55 0%, #74DAE2 " + value + "%, #fff " + value + "%, #fff 100%)";

  //deletes all child elements of container in order to make new grid
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  //adding more divs inside container
  const squareGrid = this.value * this.value; //taking slider value to get grid size
  for (let i = 1; i <= squareGrid; i++) {
    const newDiv = document.createElement("div");
    newDiv.id = "square" + i;
    newDiv.className = "square";
    container.appendChild(newDiv);
  }
  container.style.gridTemplateColumns = "repeat(" + this.value + ", 1fr)"; //changes row amount
};



//changes color of divs to black on click
function changeToDefault() {
  container.addEventListener("mousedown", (event) => {
    //event delegation. Using container instead of each grid
    event.target.style.backgroundColor = "black";
    mouseDown = true;
    container.addEventListener("mousemove", (event) => {
      if (mouseDown) {
        event.target.style.backgroundColor = "black";
      }
    });
  });
  container.addEventListener("mouseup", () => {
    mouseDown = false;
  });
}

//changes color based on color input
solidColor.oninput = function () {
  solidColor.addEventListener('click', () => {
    container.addEventListener("mousedown", (event) => {
      //event delegation. Using container instead of each grid
      event.target.style.backgroundColor = this.value;
      mouseDown = true;
      container.addEventListener("mousemove", (event) => {
        if (mouseDown) {
          event.target.style.backgroundColor = this.value;
        }
      });
    });
    container.addEventListener("mouseup", () => {
      mouseDown = false;
    });
  })
  }


//changes color of divs to rainbow on click
function changeToRainbow() {
  container.addEventListener("mousedown", (event) => {
    //event delegation. Using container instead of each grid
    event.target.style.backgroundColor = `hsl(${
      Math.random() * 360
    }, 100%, 50%)`;
    mouseDown = true;
    container.addEventListener("mousemove", (event) => {
      if (mouseDown) {
        event.target.style.backgroundColor = `hsl(${
          Math.random() * 360
        }, 100%, 50%)`;
      }
    });
  });
  container.addEventListener("mouseup", () => {
    mouseDown = false;
  });
}

//changes color of divs to white on click
function eraseGrid() {
  container.addEventListener("mousedown", (event) => {
    //event delegation. Using container instead of each grid
    event.target.style.backgroundColor = "white";
    mouseDown = true;
    container.addEventListener("mousemove", (event) => {
      if (mouseDown) {
        event.target.style.backgroundColor = "white";
      }
    });
  });
  container.addEventListener("mouseup", () => {
    mouseDown = false;
  });
}

//erases grid by changing all divs to white
function resetGrid() {
  container.childNodes.forEach(
    (child) => (child.style.backgroundColor = "white")
  );
}


document.appendChild(container);

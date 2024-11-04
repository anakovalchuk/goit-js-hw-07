function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector(`input[type="number"]`)
const create = document.querySelector(`button[data-create]`)
const destroy = document.querySelector(`button[data-destroy]`)
const box = document.querySelector("#boxes")

let size = 30;

create.addEventListener("click", createMarkup);
destroy.addEventListener("click", handleDestroy);

function createMarkup () {
  if (+input.value < 0 || +input.value > 100) {
    console.log("error");
    return;
  }

  createBoxes(+input.value) 
}

function handleDestroy () {
  box.innerHTML = "";
  input.value = "";
}

function createBoxes(amount) {
  box.innerHTML = "";
  size = 30;

  const arr = [];

  for(let i = 0; i < amount; i++) {
    const myBox = document.createElement("div");
    myBox.style.width = `${size}px`;
    myBox.style.height = `${size}px`;
    myBox.style.backgroundColor = getRandomHexColor();

    arr.push(myBox);
    size +=10;
  }

  box.append(...arr)
}
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

create.addEventListener("click", handleCreate);
destroy.addEventListener("click", handleDestroy);

function handleCreate () {
  if (+input.value < 1 || +input.value > 100) {
        console.log("error");
        return;
      }
    
      createBoxes(+input.value) 
    }

function handleDestroy () {
  destroyBoxes();
  input.value = "";
}

function createBoxes (amount) {
  size = 30;
  const fragment = document.createDocumentFragment();

  for(let i = 0; i < amount; i++) {
    const myBox = document.createElement("div");
    myBox.style.width = `${size}px`;
    myBox.style.height = `${size}px`;
    myBox.style.backgroundColor = getRandomHexColor();

    fragment.appendChild(myBox);
    size +=10;
  }

  box.innerHTML = '';
  box.appendChild(fragment);
}

  function destroyBoxes() {
    box.innerHTML = ''; 
  }



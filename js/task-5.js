function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btn = document.querySelector(".change-color");
const changeBodyColor = document.querySelector("body");
const spanColor = document.querySelector(".color")

btn.addEventListener("click", () => {
  const newColor = getRandomHexColor();
  changeBodyColor.style.backgroundColor = newColor;
  spanColor.textContent = newColor;
});
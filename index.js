const circle = document.getElementById("circle");
const upBtn = document.getElementById("up");
const downBtn = document.getElementById("down");
let rotateValue = circle.style.transform;

let rotateSum;

upBtn.addEventListener("click", () => {
  rotateSum = rotateValue + "rotate(-90deg)";
  circle.style.transform = rotateSum;
  rotateValue = rotateSum;
});

downBtn.addEventListener("click", () => {
  rotateSum = rotateValue + "rotate(90deg)";
  circle.style.transform = rotateSum;
  rotateValue = rotateSum;
});

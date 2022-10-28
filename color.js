const createBtn = document.getElementById("createBtn");
const colorDiv = document.getElementById("colorDiv");

function colorCreation() {
  let thing = prompt('Hello')
  let letter = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letter[Math.floor(Math.random() * 16)];
  }
  console.log(color);
  return color;
}

createBtn.addEventListener("click", colorCreation);

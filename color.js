const createBtn = document.getElementById("createBtn");
const coords = document.getElementById("coords");
const colorDiv = document.querySelector(".colorDiv");

function colorCreation() {
  let letter = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letter[Math.floor(Math.random() * 16)];
  }
  // console.log(color);
  return color;
}

function numberOfColors() {
  let amount = prompt("How much colors to display");
  let colorArr = [];
  for (let i = 0; i < amount; i++) {
    let color = colorCreation();
    let colObj = {
      // amount,
      i,
      color,
    };
    // console.log({amount,color})
    colorArr.push({ colObj });
  }
  console.log(colorArr);

  colorArr.forEach((color) => {
    colorDiv.innerHTML += `<div id="colorBg${color.colObj.i}" style = "margin: 10px auto;
    padding: 10px;
    width: 10px;
    height: 10px;
    background-color: ${color.colObj.color};
    border-radius: 50%;"></div>`;
    // console.log(color.colObj.color);
  });
  // console.log(colorBg1.getBoundingClientRect())
  // console.log(colorBg2.getBoundingClientRect())
}

function colorCoords(id) {
  console.log(id.x);
}

document.addEventListener("mousemove", (e) => {
  coords.innerHTML = `x : ${e.pageX} / y : ${e.pageY}`;

  colorDiv.addEventListener("click", (event) => {
    // let id = event.target.id
    let id = event.target.id;
    id.style.left = e.pageX + "px"
    // console.log(id.getBoundingClientRect())
  });
});

createBtn.addEventListener("click", () => {
  numberOfColors();
});

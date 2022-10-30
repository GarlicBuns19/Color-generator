const createBtn = document.getElementById("createBtn");
const colorDiv = document.getElementById("colorDiv");

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
    colorDiv.innerHTML += `<div id="colorBg" style = "margin: 10px auto;
    padding: 20px;
    width: 15px;
    height: 15px;
    background-color: ${color.colObj.color};
    border-radius: 50%;
    align-self: center;"></div>`;
    // console.log(color.colObj.color);
  });
}

createBtn.addEventListener("click", () => {
  numberOfColors();
});

const createBtn = document.getElementById("createBtn");
const colorDiv = document.getElementById("colorDiv");

function colorCreation() {
  let letter = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letter[Math.floor(Math.random() * 16)];
  }
  console.log(color);
  return color;
}

(function numberOfColors(){
    let amount = prompt('Hello')
    for(let i = 0; i < amount;i++){
        colorDiv.innerHTML += amount
    }
}())

createBtn.addEventListener("click", colorCreation);

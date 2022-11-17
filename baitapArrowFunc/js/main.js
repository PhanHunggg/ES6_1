const colorList = [
  "pallet",
  "viridian",
  "cerulean",
  "vermillion",
  "lavender",
  "celadon",
  "saffron",
  "fuschia",
  "cinnabar",
];

const setColor = () => {
  var html = colorList.reduce((total, element) => {
    // console.log(element);
    total += `
    <button onclick="setUpColors(event)" class="color-button ${element}"></button>
    `;
    return total;
  }, "");
  document.getElementById("colorContainer").innerHTML = html;
  document.querySelector(".pallet").classList.add("active");
};
setColor();
const domSelect = (select) => document.querySelector(select);

const setUpColors = (even) => {
  domSelect(".pallet").classList.remove("active");
  domSelect(".viridian").classList.remove("active");
  domSelect(".cerulean").classList.remove("active");
  domSelect(".vermillion").classList.remove("active");
  domSelect(".lavender").classList.remove("active");
  domSelect(".celadon").classList.remove("active");
  domSelect(".saffron").classList.remove("active");
  domSelect(".fuschia").classList.remove("active");
  domSelect(".cinnabar").classList.remove("active");

  // gắn class active vào nut vừa nhấn
  
  var test = even.path[0].classList[1]
  
  colorHouse(test);
  
  even.target.classList.add("active");
};

const colorHouse = (colorHouse) =>{
for (var i in colorList){
  document.getElementById("house").classList.remove(colorList[i]);
  document.querySelector(`.${colorList[i]}`).classList.remove("active");
}

  document.getElementById("house").classList.add(colorHouse);

}

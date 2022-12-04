// Declaring Variables
const gradientbg = document.querySelector(".main");
const preBtn = document.getElementById("pre-btn");
const nxtBtn = document.getElementById("nxt-btn");
const g1 = document.querySelector("#g1");
const g2 = document.querySelector("#g2");
const default1 = "#780206";
const default2 = "#061161";

//Array of colors stored in it variable
const colors1 = [
  default1,
  "#FBD3E9",
  "#00d2ff",
  "#f2709c",
  "#a73737",
  "#4b6cb7",
  "#C04848",
  "#5f2c82",
  "#232526",
  "#5C258D",
  "#4776E6",
];
const colors2 = [
  default2,
  "#BB377D",
  "#3a7bd5",
  "#ff9472",
  "#7a2828",
  "#182848",
  "#480048",
  "#49a09d",
  "#414345",
  "#4389A2",
  "#8E54E9",
];
const gradient = (colOne, colTwo) => {
  gradientbg.style.backgroundImage =
    "linear-gradient(to right, " + colOne + "," + colTwo + ")";
  g1.textContent = default1;
  g2.textContent = default2;
};
gradient(default1, default2);

let counter = 0;

//Making the buttons clickable and adding conditions
const nxtBtnbg = () => {
  if (counter >= colors1.length - 1) {
    counter = 0;
    gradient(colors1[counter], colors2[counter]);
    // gradientBox.style.backgroundImage =
  } else {
    counter++;
    gradient(colors1[counter], colors2[counter]);
  }
  g1.textContent = colors1[counter];
  g2.textContent = colors2[counter];
};

const preBtnbg = () => {
  if (counter <= 0) {
    counter = colors1.length - 1;
    gradients(colors1[counter], colors2[counter]);
  } else {
    counter--;
    gradients(colors1[counter], colors2[counter]);
  }
  g1.textContent = colors1[counter];
  g2.textContent = colors2[counter];
};
nxtBtn.addEventListener("click", nxtBtnbg);
preBtn.addEventListener("click", preBtnbg);

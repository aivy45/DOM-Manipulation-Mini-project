let para = document.querySelector(".text-align-center .text-color-white")
para.style.fontFamily="monospace";
let color = document.querySelector(".button-group .button");
let getColor = window.getComputedStyle(color, null).backgroundColor;
para.style.backgroundColor = getColor;




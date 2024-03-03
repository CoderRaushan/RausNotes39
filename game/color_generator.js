function randomcolor()
{
let red=Math.floor(Math.random()*255);
let green=Math.floor(Math.random()*255);
let blue=Math.floor(Math.random()*255);
let colorcode=`rgb(${red},${green},${blue})`;
return colorcode;
}
let gameheading=document.querySelector(".game-heading");
let gamebtn=document.querySelector(".gamebtn");
let gamediv=document.querySelector(".color-div-container");
gamebtn.addEventListener("click",function()
{
    gameheading.innerText=randomcolor();
    gamediv.style.backgroundColor=randomcolor();
  
});

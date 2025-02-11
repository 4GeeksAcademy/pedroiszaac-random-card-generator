import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  //console.log("Hello Rigo from the console!");
  indiceAleatorio ()
  document.getElementById("boton").addEventListener("click", indiceAleatorio)
};

function indiceAleatorio() {
  let numbers = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
  let symbols = ["♦", "♥", "♠", "♣"];
  let numberRandom = numbers[Math.floor(Math.random() * numbers.length)];
  //console.log (numberRandom)
  let symbolsRandom = symbols[Math.floor(Math.random() * symbols.length)];
  //console.log (symbolsRandom)
  document.getElementById("numero").innerHTML = numberRandom 
  document.getElementById("top-symbol").innerHTML = symbolsRandom + " " + numberRandom
  document.getElementById("bottom-symbol").innerHTML = symbolsRandom + " " + numberRandom

  if (symbolsRandom == "♥"||symbolsRandom == "♦"){ 
    document.getElementById("top-symbol").style.color = "red"
    document.getElementById("bottom-symbol").style.color = "red"
  } else{ 
    document.getElementById("top-symbol").style.color = "black"
    document.getElementById("bottom-symbol").style.color = "black"
  }
}

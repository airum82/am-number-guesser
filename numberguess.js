
var min = 1;
var max = 100;
var entry = document.getElementById("guess").value;
var secretNum = Math.floor(Math.random() * (max - min) + min);
function isRight() {
  var entry = document.getElementById("guess").value;
  var fin = parseInt(entry)
  event.preventDefault();
  if (fin === secretNum) {
    document.getElementById("numberGuesses").innerHTML = 'BOOM!';
    numRange();
    rangeText1();
  } else if (fin > secretNum) {
    rangeText2();
    document.getElementById("numberGuesses").innerHTML = 'Nope, too high!';
  } else {
    rangeText2();
    document.getElementById("numberGuesses").innerHTML = 'Nope, too low!';
  }
  document.getElementById("recentGuess").innerText = fin;
  document.querySelector(".message").innerText = 'Your last guess was';
}

document.getElementById("guess").addEventListener('keyup', wipe)
function wipe() { 
  var entry = document.getElementById("guess").value;
  event.preventDefault();
  if (entry !== "") {
    document.getElementById("erase").disabled = false;
    document.getElementById("reset").disabled = false;
    document.getElementById("answer").disabled = false;
  } else {  
    document.querySelector("#answer").disabled = true;
    document.querySelector("#erase").disabled = true;
    document.querySelector("#reset").disabled = true;
}}

document.querySelector("#erase").onclick = function clear() {
  var clear = document.querySelector("#guess");
  event.preventDefault();
  clear.value = "";
  wipe();
}

function naanbread() {
  var entry = document.getElementById("guess").value;
  alert("That's NaNsense!");
}

document.querySelector("#answer").onclick = function rightNum() {
  var entry = document.getElementById("guess").value;
  var fin = parseInt(entry)
  var highRange = max
  var lowRange = min
  event.preventDefault()
  if (fin > highRange) {
    alert("Enter a number between " + min + " and " + max);
  } else if (fin < lowRange) {
    alert("Enter a number between " + min + " and " + max);
  } else if (isNaN(parseInt(fin)) === true) {
    naanbread() }
  else { 
    isRight();
  }
}

function numRange() {
  min = min - 10;
  max = max + 10;
  var newRandomNum = Math.floor(Math.random() * (max - min) + min);
  secretNum = newRandomNum;
}

document.querySelector("#changeRange").onclick = function() {
  event.preventDefault();
  min = parseInt(document.querySelector("#min").value);
  max = parseInt(document.querySelector("#max").value);
  var newRandomNum = Math.floor(Math.random() * (max - min) + min);
  secretNum = newRandomNum;
}

function rangeText1() {
  var rangeText = document.querySelector("#rangeUp");
  rangeText.innerText = 'Your number range has increased!';
    
}

function rangeText2() {
  var rangeText = document.querySelector("#rangeUp");
  rangeText.innerText = '';
}


  

// Variables and Named Functions

var magicNum;

var minRangeInput = document.querySelector('#min-range-input');
var maxRangeInput = document.querySelector('#max-range-input');
var updateButton = document.querySelector('#update-button');
var setMinRange = document.querySelector('#min-range');
var setMaxRange = document.querySelector('#max-range');
var submitButton = document.querySelector('#submit-button');
var clearButton = document.querySelector('#clear-button');
var resetButton = document.querySelector('#reset-button');
var challengerOneTags = document.querySelectorAll('.challenger-one');
var challengerTwoTags = document.querySelectorAll('.challenger-two');
var playerOneResult = document.querySelector('#player-one-score');
var playerTwoResult = document.querySelector('#player-two-score');
var playerOneInput = document.querySelector('#player-one-input');
var playerTwoInput = document.querySelector('#player-two-input');
var playerOneGuess = document.querySelector('#guess-one-input');
var playerTwoGuess = document.querySelector('#guess-two-input');
var minRangeError = document.querySelector(".min-range-error-message");
var maxRangeError = document.querySelector(".max-range-error-message");
var playerOneGuessOutside = document.querySelector(".player-one-guess-outside");
var playerTwoGuessOutside = document.querySelector(".player-two-guess-outside");

var integerMin = parseInt(minRangeInput.value);
var integerMax = parseInt(maxRangeInput.value);
//Random Number Generator
function RandomNum(x,y) {
  magicNum = Math.floor(Math.random() * (y - x + 1) + x);
}

if (magicNum === undefined) {
  RandomNum(1,100);
}

var minRangeInt = parseInt(setMinRange.innerText);
var maxRangeInt = parseInt(setMaxRange.innerText);
console.log("start min range is " + minRangeInt);
console.log("start max range is " + maxRangeInt);
console.log("start random number is " + magicNum);



//Set Range Section

function setRange() {
  var regex = /^[0-9]+$/;
  var xx = minRangeInput.value;
  var yy = maxRangeInput.value;
  var regex = /^[0-9]+$/;
  var numberCheckerMin = xx.match(regex);
  var numberCheckerMax = yy.match(regex);
  setMinRange.innerText = xx;
  setMaxRange.innerText = yy;
  RandomNum(parseInt(setMinRange.innerText),parseInt(setMaxRange.innerText));
  minRangeErrorMessage();
  maxRangeErrorMessage();
  console.log(`range set from ${setMinRange.innerText} to ${setMaxRange.innerText}`);
  console.log(`the random number is now ${magicNum}`)
  updateButton.disabled = true;
}

function checkForm() {
  var rangeForms = document.querySelectorAll('.ranger');
  var gameInputs = document.querySelectorAll('.game-inputs')
  var canSubmit = true;
  var gameSubmit = true;
  for (var i = 0; i < rangeForms.length; i++) {
    if (rangeForms[i].value.length == 0) canSubmit = false;
  }
  for (var i = 0; i < gameInputs.length; i++) {
    if (gameInputs[i].value.length !== 0) gameSubmit = true;
  }
  if (canSubmit) {
    updateButton.disabled = false;
  }
  if (gameSubmit) {
    clearButton.disabled = false;
    resetButton.disabled = false;
  }
}


function minRangeErrorMessage() {
  console.log('checking minRange for error')
  if (parseInt(minRangeInput.value) > parseInt(maxRangeInput.value) ) {
    console.log("minRange error triggered");
    minRangeError.innerText = 'Error: Minimum needs to be less than maximum!';
  } else {
    minRangeError.innerText = '';
  }
}

function maxRangeErrorMessage() {
  console.log('checking maxRange for error')
  if (parseInt(minRangeInput.value) > parseInt(maxRangeInput.value) ){
    console.log("maxRange error triggered");
    maxRangeError.innerText = 'Error: Maximum needs to be more than minimum!';
  } else {
    maxRangeError.innerText = ''; 
  }
}

// Game Section

//input guard 



function clearInputs() {
  for (i = 0; i < document.querySelectorAll('form').length; i++) {
    document.querySelectorAll('form')[i].reset();
  }
}

function startGame(p1input,p1guess,p2input,p2guess) {
  var playerOneCompass = document.querySelector('#compass-one');
  var playerTwoCompass = document.querySelector('#compass-two');
  console.log(minRangeInt);
  console.log(maxRangeInt);
  console.log(parseInt(playerOneGuess.value));
  if (playerOneGuess.value < minRangeInt || playerOneGuess > maxRangeInt || playerTwoGuess.value < minRangeInt || playerTwoGuess.value > maxRangeInt) {
    console.log("error check working");
    outsideRangeOne();
    outsideRangeTwo();
  }
  for (i = 0; i < challengerOneTags.length; i++) {
    challengerOneTags[i].innerText = p1input;
  };
  for (i = 0; i < challengerTwoTags.length; i++) {
    challengerTwoTags[i].innerText = p2input;
  };
  playerOneResult.innerText = p1guess;
  playerTwoResult.innerText = p2guess;
  if (parseInt(p1guess) < magicNum) {
    playerOneCompass.innerText = "that's too low";
  } else if (parseInt(p1guess) > magicNum) {
    playerOneCompass.innerText = "that's too high";
  } else if (parseInt(p1guess) === magicNum) {
    playerOneCompass.innerText = "BOOM!";
  };
  if (parseInt(p2guess) < magicNum) {
    playerTwoCompass.innerText = "that's too low";
  } else if (parseInt(p2guess) > magicNum) {
    playerTwoCompass.innerText = "that's too high";
  } else if (parseInt(p2guess) === magicNum) {
    playerTwoCompass.innerText = "BOOM!";
  };
  if (playerOneCompass.innerText == "BOOM!") {
    createWinCard(playerOneInput.value);
  } else if (playerTwoCompass.innerText == "BOOM!") {
    createWinCard(playerTwoInput.value);
  } else if (playerOneCompass.innerText == "BOOM!" && playerTwoCompass.innerText == "BOOM!") {
    noContest();
  }
}


function outsideRangeOne() {
    var pOneGuess = parseInt(playerOneGuess.value);
    var minInputInt = parseInt(minRangeInput.value);
    var maxInputInt = parseInt(maxRangeInput.value);
  if (pOneGuess < minInputInt || pOneGuess > maxInputInt){
    playerOneGuessOutside.innerText = 'Error: Number must be within range!';
  }else {
    playerOneGuessOutside.innerText = '';
  }
}

function outsideRangeTwo() {
  var pTwoGuess = parseInt(playerTwoGuess.value);
    var minInputInt = parseInt(minRangeInput.value);
    var maxInputInt = parseInt(maxRangeInput.value);
  if (pTwoGuess < minInputInt || pTwoGuess > maxInputInt){
    playerTwoGuessOutside.innerText = 'Error: Number must be within range!';
  }else {
    playerTwoGuessOutside.innerText = '';
  }
}

// // -- Event Listeners


updateButton.addEventListener('click', setRange)

submitButton.addEventListener('click', function() {
  console.log("submit button pressed");
  startGame(playerOneInput.value, playerOneGuess.value, playerTwoInput.value, playerTwoGuess.value);
  outsideRangeOne();
  outsideRangeTwo();
})

clearButton.addEventListener('click', function() {
  for (i=0; i < document.querySelectorAll('form').length; i++) {
  document.querySelectorAll('form')[i].reset();
  }
  clearButton.disabled = true;
})

resetButton.addEventListener('click', function() {
  setMinRange.innerText = 1;
  setMaxRange.innerText = 100;
  for (i = 0; i < challengerOneTags.length; i++) {
      challengerOneTags[i].innerText = "Challenger One";
      console.log("max for loop working")
  };
  for (i = 0; i < challengerTwoTags.length; i++) {
    challengerTwoTags[i].innerText = "Challenger Two";
    console.log("min for loop working")
  };
  playerOneResult.innerText = "00";
  playerTwoResult.innerText = "00";
  clearInputs();
  RandomNum(1,100);
  console.log(magicNum);
  resetButton.disabled = true;
  })


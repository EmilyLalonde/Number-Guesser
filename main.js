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
  console.log("update button fired...setting range...")
  var xx = minRangeInput.value;
  var yy = maxRangeInput.value;
  setMinRange.innerText = xx;
  setMaxRange.innerText = yy;
  RandomNum(parseInt(setMinRange.innerText),parseInt(setMaxRange.innerText));
  rangeErrorMessage();
  console.log(`range set; minimum ${setMinRange.innerText} to maximum ${setMaxRange.innerText}`);
  console.log(`the random number is now ${magicNum}`)
  updateButton.disabled = true;
}

function checkForm() {
  console.log("running checkForm function")
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


function rangeErrorMessage() {
  console.log('checking range for error');
  console.log(parseInt(minRangeInput.value), parseInt(maxRangeInput.value));
  if (parseInt(minRangeInput.value) > parseInt(maxRangeInput.value) ) {
    console.log("range error triggered");
    minRangeError.innerText = 'Error: Minimum needs to be less than maximum!';
    maxRangeError.innerText = 'Error: Maximum needs to be more than minimum!';
    clearInputs();
    setMinRange.innerText = 1;
    setMaxRange.innerText = 100;
    RandomNum(1,100);
  } else {
    minRangeError.innerText = '';
    maxRangeError.innerText = ''; 
  }
}



// Game Section

function clearInputs() {
  for (i=0; i < document.querySelectorAll('form').length; i++) {
  document.querySelectorAll('form')[i].reset();
  }
  clearButton.disabled = true;
}

function startGame(p1input,p1guess,p2input,p2guess) {
  var playerOneCompass = document.querySelector('#compass-one');
  var playerTwoCompass = document.querySelector('#compass-two');
  var pOneGuess = parseInt(playerOneGuess.value);
  var pTwoGuess = parseInt(playerTwoGuess.value);
    console.log(pOneGuess);
    console.log(minRangeInt);
  if (playerOneGuess.value === "" || playerTwoGuess.value === "") {
    playerOneGuessOutside.innerText = "You must guess a number!";
    playerTwoGuessOutside.innerText = "You must guess a number!";
  } else {
  if (pOneGuess < minRangeInt || pOneGuess > maxRangeInt || pTwoGuess < minRangeInt || pTwoGuess > maxRangeInt) {
    console.log("error check true");
    outsideRangeError();
  } else {
    playerOneGuessOutside.innerText = "";
    playerTwoGuessOutside.innerText = "";
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
}

function outsideRangeError() {
    var pOneGuess = parseInt(playerOneGuess.value);
    var minInputInt = parseInt(minRangeInput.value);
    var maxInputInt = parseInt(maxRangeInput.value);
    playerOneGuessOutside.innerText = 'Error: Number must be within range!';
    playerTwoGuessOutside.innerText = 'Error: Number must be within range!';
}

// // -- Event Listeners


updateButton.addEventListener('click', setRange)

submitButton.addEventListener('click', function() {
  console.log("submit button pressed");
  startGame(playerOneInput.value, playerOneGuess.value, playerTwoInput.value, playerTwoGuess.value);
})

clearButton.addEventListener('click', clearInputs)

resetButton.addEventListener('click', function() {
  console.log("reset button triggered")
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
  minRangeError.innerText = '';
  maxRangeError.innerText = '';
  clearInputs();
  RandomNum(1,100);
  console.log(magicNum);
  resetButton.disabled = true;
  })


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
var winnerCard = document.querySelector(".win-card");

function RandomNum(x,y) {
  // magicNum = Math.floor(Math.random() * (y - x + 1) + x);
  magicNum = Math.floor((Math.random() * y) + x);
  console.log('hello', magicNum);
}

function setRange() {
  var integerMin = parseInt(minRangeInput.value);
  var integerMax = parseInt(maxRangeInput.value)
  var regex = /^[0-9]+$/;
  var xx = minRangeInput.value;
  var yy = maxRangeInput.value;
  var regex = /^[0-9]+$/;
  var numberCheckerMin = xx.match(regex);
  var numberCheckerMax = yy.match(regex);
  RandomNum(integerMin,integerMax);
  console.log(magicNum);
  setMinRange.innerText = xx;
  setMaxRange.innerText = yy;
  minRangeErrorMessage();
  maxRangeErrorMessage();
  console.log(magicNum);
}

function minRangeErrorMessage() {
  console.log('function firing!!')
  if (parseInt(minRangeInput.value) > parseInt(maxRangeInput.value) ) {
    minRangeError.innerText = 'Error: Minimum needs to be less than maximum!';
  } else {
    minRangeError.innerText = '';
  }
}

function maxRangeErrorMessage() {
  console.log('function firing!!')
  if (parseInt(minRangeInput.value) > parseInt(maxRangeInput.value) ){
    maxRangeError.innerText = 'Error: Maximum needs to be more than minimum!';
  } else {
    maxRangeError.innerText = ''; 
  }
}


function clearInputs() {
  for (i = 0; i < document.querySelectorAll('form').length; i++) {
    document.querySelectorAll('form')[i].reset();
  }
}

function startGame(p1input,p1guess,p2input,p2guess) {
  var playerOneCompass = document.querySelector('#compass-one');
  var playerTwoCompass = document.querySelector('#compass-two');
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
    winnerCard.innerHTML = `<div class="versus-container">
    <span class="challenger-one">CHALLENGER 1 NAME</span>
    <p class="versus">VS</p>
    <span class="challenger-two">CHALLENGER 2 NAME</span>
  </div>
 <div class="c-border"></div>
 <div class="winner-container">
   <strong class="challenger-winner">CHALLENGER WINNER NAME</strong>
   <span class="winner">WINNER</span>
 </div>
 <div class="c-border"></div>
 <footer>
   <span class="guesses"><strong class=guessNum>000</strong>GUESSES</span>
   <span class="time"><strong class="minutes">0.0</strong> MINUTES</span>
   <button type="button" class="x-button">&#10005;</button>
 </footer>`;
  };
  if (parseInt(p2guess) < magicNum) {
    playerTwoCompass.innerText = "that's too low";
  } else if (parseInt(p2guess) > magicNum) {
    playerTwoCompass.innerText = "that's too high";
  } else if (parseInt(p2guess) === magicNum) {
    playerTwoCompass.innerText = "BOOM!";
    winnerCard.innerHTML += `<div class="versus-container">
    <span class="challenger-one">CHALLENGER 1 NAME</span>
    <p class="versus">VS</p>
    <span class="challenger-two">CHALLENGER 2 NAME</span>
  </div>
 <div class="c-border"></div>
 <div class="winner-container">
   <strong class="challenger-winner">CHALLENGER WINNER NAME</strong>
   <span class="winner">WINNER</span>
 </div>
 <div class="c-border"></div>
 <footer>
   <span class="guesses"><strong class=guessNum>000</strong>GUESSES</span>
   <span class="time"><strong class="minutes">0.0</strong> MINUTES</span>
   <button type="button" class="x-button">&#10005;</button>
 </footer>`;
  };

  if (playerOneCompass.innerText == "BOOM!") {
    createWinCard(playerOneInput.value)
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
};
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
  })

  
  

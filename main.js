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

function RandomNum(x,y) {
  magicNum = Math.floor(Math.random() * (y - x + 1) + x);
 

function setRange() {
  var xx = parseInt(minRangeInput.value);
  var yy = parseInt(maxRangeInput.value);
  RandomNum(xx,yy);
  console.log(magicNum);
  setMinRange.innerText = numberCheckerMin;
  setMaxRange.innerText = numberCheckerMax;
}

function clearInputs() {
  for (i = 0; i < document.querySelectorAll('form').length; i++) {
    document.querySelectorAll('form')[i].reset();
  }
}

function startGame(x,xx,y,yy) {
  var playerOneErrorMessage = document.querySelector('#compass-one');
  var playerTwoErrorMessage = document.querySelector('#compass-two');
  for (i = 0; i < challengerOneTags.length; i++) {
    challengerOneTags[i].innerText = x;
  };
  for (i = 0; i < challengerTwoTags.length; i++) {
    challengerTwoTags[i].innerText = y;
  };
  playerOneResult.innerText = xx;
  playerTwoResult.innerText = yy;
  if (parseInt(xx) < magicNum) {
    playerOneErrorMessage.innerText = "that's too low";
  } else if (parseInt(xx) > magicNum) {
    playerOneErrorMessage.innerText = "that's too high";
  } else if (parseInt(xx) === magicNum) {
    playerOneErrorMessage.innerText = "BOOM!";
  };
  if (parseInt(yy) < magicNum) {
    playerTwoErrorMessage.innerText = "that's too low";
  } else if (parseInt(yy) > magicNum) {
    playerTwoErrorMessage.innerText = "that's too high";
  } else if (parseInt(yy) === magicNum) {
    playerTwoErrorMessage.innerText = "BOOM!";
  };
  if (playerOneErrorMessage.innerText == "BOOM!") {
    createWinCard(playerOneInput.value);
  } else if (playerTwoErrorMessage.innerText == "BOOM!") {
    createWinCard(playerTwoInput.value);
  } else if (playerOneErrorMessage.innerText == "BOOM!" && playerTwoErrorMessage.innerText == "BOOM!") {
    noContest();
  }
}
// function guessInput() {
// var guessInputTwo = numberCheckerMin;
// var regex = /^[0-9]+$/;
// var guessChecker1 = guessInput1.match(regex);
// var guessInputTwo = numberCheckerMax;
// var regex = /^[0-9]+$/;
// var guessChecker2 = guessInputTwo(regex);
// RandomNum(xx,yy);
// playerOneResult.innerText = guessChecker1;
// playerTwoResult.innerText = guessChecker2;

// function createWinCard(x) {
//   target section .scoreboard in html;
//   insert scorecard via innerHTML;
// }

// function noContest() {
//   target .compass in html; 
//   puts "tied! no contest"
// }











// -- Event Listeners

updateButton.addEventListener('click', setRange)

submitButton.addEventListener('click', function() {
  console.log("submit button pressed");
  startGame(playerOneInput.value, playerOneGuess.value, playerTwoInput.value, playerTwoGuess.value);
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





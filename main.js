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

function RandomNum(x,y) {
  // magicNum = Math.floor(Math.random() * (y - x + 1) + x);
  
  magicNum = Math.floor((Math.random() * y) + x);
  console.log('hello', magicNum);
}

function setRange() {
  var integerMin = parseInt(minRangeInput.value);
  var integerMax = parseInt(maxRangeInput.value);
  var regex = /^[0-9]+$/;
  var xx = minRangeInput.value;
  var numberCheckerMin = xx.match(regex);
  var yy = maxRangeInput.value;
  var numberCheckerMax = yy.match(regex);
  RandomNum(integerMin,integerMax);
  setMinRange.innerText = numberCheckerMin;
  setMaxRange.innerText = numberCheckerMax;
  // minRangeErrorMessage();
  // maxRangeErrorMessage();
  console.log('work', magicNum)
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

function minRangeErrorMessage() {
  console.log('function firing!!')
  if (parseInt(minRangeInput.value) > parseInt(maxRangeInput.value) ){
    minRangeError.innerText = 'Error: Minimum needs to be less than maximum!';
  } else {
    minRangeError.innerText = '';
  }
}

function maxRangeErrorMessage() {
  console.log('function firing!!')
  if (parseInt(minRangeInput.value) > (maxRangeInput.value) ){
    maxRangeError.innerText = 'Error: Maximum needs to be more than minimum!';
  } else {
    maxRangeError.innerText = ''; 
  }
}

function outsideRangeOne() {
  if (parseInt(playerOneGuess.value) < parseInt(minRangeInput.value) ){
    playerOneGuessOutside.innerText = 'Error: Number must be within range!';
  }else {
    playerOneGuessOutside.innerText = '';
  }
  if (parseInt(playerOneGuess.value) > parseInt(maxRangeInput.value) ){
    playerOneGuessOutside.innerText = 'Error: Number must be within range!';
  }else 
  playerOneGuessOutside.innerText = '';
}

function outsideRangeTwo() {
  if (parseInt(playerTwoGuess.value) < parseInt(minRangeInput.value) ){
    playerTwoGuessOutside.innerText = 'Error: Number must be within range!';
  }else {
    playerTwoGuessOutside.innerText = '';
  }
  if (parseInt(playerTwoGuess.value) > parseInt(maxRangeInput.value) ){
    playerTwoGuessOutside.innerText = 'Error: Number must be within range!';
  }else 
  playerTwoGuessOutside.innerText = '';
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


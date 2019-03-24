
var updateButton = document.querySelector('#update-button');
var playerOneInput = document.querySelector('#player-one-input');
var playerTwoInput = document.querySelector('#player-two-input');
var playerOneGuess = document.querySelector('#guess-one-input');
var playerTwoGuess = document.querySelector('#guess-two-input');
var submitButton = document.querySelector('#submit-button');

var challengerOneTags = document.querySelectorAll('.challenger-one');
var challengerTwoTags = document.querySelectorAll('.challenger-two');

var clearButton = document.querySelector('#clear-button');
var resetButton = document.querySelector('#reset-button');

// Reset Game - Button 
var magicNumber;

function RandomNum(x,y) {
  magicNumber = Math.floor(Math.random() * (y - x + 1) + x);
}


resetButton.addEventListener('click', function() {
  setMinRange = 1;
  setMaxRange = 100;
  for (i=0; i < challengerOneTags; i++) {
      challengerOneTags[i] = "Challenger One";
  };
  for (i=0; i < challengerTwoTags; i++) {
    challengerTwoTags[i] = "Challenger Two"
  };
  playerOneChoice = 0;
  playerTwoChoice = 0;
  RandomNum();
})


// Button Disable Functions 

function disableResetButton() {
  if (playerOneResult && playerTwoResult = 0) {
    resetButton.disabled = true;
  }
}

function disableClearButton() {
  var allInputs = document.querySelector('input');
    for (i = 0; i < input.length; i++) {
      if (input[i] != "") {
    clearButton.disabled = false;
  } else if (input[i] = "" ) {
    clearButton.disabled = true;
  };
    };
};







// Clear Input Field - Button 

clearButton.addEventListener('click', function() {
  document.querySelector('form').reset();
})






// #score-box 
var playerOneResult = document.querySelector('#player-one-score');
var playerTwoResult = document.querySelector('#player-two-score');


// Range Setting function 


function setRange(minRangeInput,maxRangeInput) {
  var minRangeInput = document.querySelector('#min-range-input');
  var maxRangeInput = document.querySelector('#max-range-input');
  var setMinRange = document.querySelector('#min-range');
  var setMaxRange = document.querySelector('#max-range');
  minRangeInput.innerText = setMinRange;
  maxRangeInput.innerText = setMaxRange;
}

updateButton.addEventListener('click', setRange(minRangeInput, maxRangeInput))







// Submit Button function 

submitButton.addEventListener('click', function() {
  for(var i = 0; i < challengerOneTags.length; i++) {
    challengerOneTags[i] = playerOneInput.value;
  }
  for(var i = 0; i < challengerTwoTags.length; i++) {
    challengerTwoTags[i] = playerTwoInpu.value;
  }
  parseInt(playerOneGuess.value) = playerOneChoice;
  parseInt(playerTwoGuess.value) = playerTwoChoice;
}); 


// Error Message Functions 

function errorMessage() {
  var playerOneErrorMessage = document.querySelector('#compass-one');
  var playerTwoErrorMessage = document.querySelector('#compass-two');
  if (playerOneResult < magicNumber) {
    playerOneErrorMessage.innerText = "that's too low";
  } else if (playerOneResult > magicNumber) {
    playerOneErrorMessage.innerText = "that's too high";
  } else if (playerOneResult = magicNumber) {
    playerOneErrorMessage = "BOOM!";
    runWinner(challengerOneTags)
  } else if (playerTwoResult < magicNumber) {
    playerTwoErrorMessage.innerText = "that's too low";
  } else if (playerTwoResult > magicNumber) {
    playerTwoErrorMessage.innerText = "that's too high";
  } else if (playerTwoResult = magicNumber) {
    playerTwoErrorMessage = "BOOM!";
    runWinner(challengerTwoTags);
  }
};
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

function RandomNum(x,y) {
  magicNum = Math.floor(Math.random() * (y - x + 1) + x);
}

function setRange() {
  var xx = minRangeInput.value;
  var yy = maxRangeInput.value;
  setMinRange.innerText = minRangeInput.value;
  setMaxRange.innerText = maxRangeInput.value;
  RandomNum(xx,yy);
  console.log(xx,yy);
  console.log(magicNum);
}

function clearInputs() {
  for (i = 0; i < document.querySelectorAll('form').length; i++) {
    document.querySelectorAll('form')[i].reset();
  }
}

// -- Event Listeners

updateButton.addEventListener('click', setRange)

clearButton.addEventListener('click', function() {
  for (i=0; i < document.querySelectorAll('form').length; i++) {
  document.querySelectorAll('form')[i].reset();
};
})

resetButton.addEventListener('click', function() {
  setMinRange.innerText = 1;
  setMaxRange.innerText = 100;
  for (i=0; i < challengerOneTags; i++) {
      challengerOneTags[i].innerText = "Challenger One";
  };
  for (i=0; i < challengerTwoTags; i++) {
    challengerTwoTags[i].innerText = "Challenger Two"
  };
  playerOneResult.innerText = 0;
  playerTwoResult.innerText = 0;
  clearInputs();
  RandomNum(1,100);
  console.log(magicNum);
})
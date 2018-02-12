console.log('hello world');

// to do

// game board
  // game board is 3x3 table
  // set up table in html
  // label them positions 1-9
  // set up board to store data in object
  var boardStorage = [
    [[], [], []], 
    [[], [], []], 
    [[], [], []], 
  ]


// game elements  
  // first player is X
  // second player is O
  // X and O relationship could be boolean value
  // set a variable as true = X, false = O
  var isXTurn = true;


// click handlers for placing pieces
  // function to place the piece on the table
  // set the X or O based on the turn
  // set the value to the opposite after each turn
function modifyText() {
  //console.log(event.srcElement.textContent);
    if (event.srcElement.textContent === '.') {
      if (isXTurn === true) {
        event.srcElement.textContent = 'X';
        isXTurn = false;
      } else {
        event.srcElement.textContent = 'O';
        isXTurn = true;
      }
    }
  // one.firstChild.nodeValue = new_text;
}
 
// add event listeners to each space on the table
var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");
var five = document.getElementById("five");
var six = document.getElementById("six");
var seven = document.getElementById("seven");
var eight = document.getElementById("eight");
var nine = document.getElementById("nine");
one.addEventListener("click", function(){modifyText()}, false);
two.addEventListener("click", function(){modifyText()}, false);
three.addEventListener("click", function(){modifyText()}, false);
four.addEventListener("click", function(){modifyText()}, false);
five.addEventListener("click", function(){modifyText()}, false);
six.addEventListener("click", function(){modifyText()}, false);
seven.addEventListener("click", function(){modifyText()}, false);
eight.addEventListener("click", function(){modifyText()}, false);
nine.addEventListener("click", function(){modifyText()}, false);


// game logic methods
  // row check
  // column check 
  // major diagonal check - there is only 1
  // minor diagonal check - there is only 1













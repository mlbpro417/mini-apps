//to do

// create game board
// 8x8 matrix

var gameBoard = [
  [[],[],[],[],[],[],[],[]],
  [[],[],[],[],[],[],[],[]],
  [[],[],[],[],[],[],[],[]],
  [[],[],[],[],[],[],[],[]],
  [[],[],[],[],[],[],[],[]],
  [[],[],[],[],[],[],[],[]],
  [[],[],[],[],[],[],[],[]],
  [[],[],[],[],[],[],[],[]]
]

// game functionality
  // add pieces to the board -- select which column you want to drop it in?
  // set clickHandler on columns 0-7 and drop the piece in that column
  // when you add a piece to a row it drops down until there is another piece to rest on
  // check to see if there is a piece in the board starting from the bottom row and moving upwards

  var zero = document.getElementById("columnZero");
  var one = document.getElementById("columnOne");
  var two = document.getElementById("columnTwo");
  var three = document.getElementById("columnThree");
  var four = document.getElementById("columnFour");
  var five = document.getElementById("columnFive");
  var six = document.getElementById("columnSix");
  var seven = document.getElementById("columnSeven");

  function setPieceIntoBoard() {
    if (event.srcElement.textContent === '0') {
      dropPiece(0);    
    }
}


// for loop to iterate backwards through the game board checking each piece
var dropPiece = function(column) {
  for (var i = gameBoard.length - 1; i >= 0; i--) {
    if (gameBoard[i][column].length === 0) {
      gameBoard[i][column] = 'X';
      return;
    }
  }
}

// add event listener to table

zero.addEventListener("click", () => {setPieceIntoBoard()}, false);
one.addEventListener("click", () => {setPieceIntoBoard()}, false);
two.addEventListener("click", () => {setPieceIntoBoard()}, false);
three.addEventListener("click", () => {setPieceIntoBoard()}, false);
four.addEventListener("click", () => {setPieceIntoBoard()}, false);
five.addEventListener("click", () => {setPieceIntoBoard()}, false);
six.addEventListener("click", () => {setPieceIntoBoard()}, false);
seven.addEventListener("click", () => {setPieceIntoBoard()}, false);
console.log('hello world');

// to do

// game board
  // game board is 3x3 table
  // set up table in html
  // label them positions 1-9

  // set up board to store data in array 
  var boardStorage = [
    [[], [], []], 
    [[], [], []], 
    [[], [], []], 
  ];


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
}
 
// add event listeners to each space on the table and enter data into board
// run all methods on the board after each piece is placed to check for a winner
// reset the page
var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");
var five = document.getElementById("five");
var six = document.getElementById("six");
var seven = document.getElementById("seven");
var eight = document.getElementById("eight");
var nine = document.getElementById("nine");
var reset = document.getElementById("button");
one.addEventListener("click", function(){modifyText(); boardStorage[0][0] = event.srcElement.textContent; checkBoard(boardStorage); }, false);
two.addEventListener("click", function(){modifyText(); boardStorage[0][1] = event.srcElement.textContent; checkBoard(boardStorage); },  false);
three.addEventListener("click", function(){modifyText(); boardStorage[0][2] = event.srcElement.textContent; checkBoard(boardStorage); }, false);
four.addEventListener("click", function(){modifyText(); boardStorage[1][0] = event.srcElement.textContent; checkBoard(boardStorage); }, false);
five.addEventListener("click", function(){modifyText(); boardStorage[1][1] = event.srcElement.textContent; checkBoard(boardStorage); }, false);
six.addEventListener("click", function(){modifyText(); boardStorage[1][2] = event.srcElement.textContent; checkBoard(boardStorage); }, false);
seven.addEventListener("click", function(){modifyText(); boardStorage[2][0] = event.srcElement.textContent; checkBoard(boardStorage); }, false);
eight.addEventListener("click", function(){modifyText(); boardStorage[2][1] = event.srcElement.textContent; checkBoard(boardStorage); }, false);
nine.addEventListener("click", function(){modifyText(); boardStorage[2][2] = event.srcElement.textContent; checkBoard(boardStorage); }, false);
reset.addEventListener("click", function(){window.location.reload(false);}, false);


// game logic methods
  // row check
  // iterate through each row and check the value of 0,1,2 in the array
  // if all three are equal send an alert that there is a winner

  var rowCheck = function(board) {
    board.forEach(function(row) {
      for (var i = 0; i < row.length; i++) {
        if (board[i][0] === 'X' && board[i][1] === 'X' && board[i][2] === 'X') {
          window.alert('X HAS WON THE GAME');
        } else if (board[i][0] === 'O' && board[i][1] === 'O' && board[i][2] === 'O') {
          window.alert('O HAS WON THE GAME');
        }
      }
    }); 
  };

  // column check
  // iterate through each column which is the opposite of column
  // if all three are equal send an alert that there is a winner

  var columnCheck = function(board) {
    board.forEach(function(row) {
      for (var i = 0; i < row.length; i++) {
        if (board[0][i] === 'X' && board[1][i] === 'X' && board[2][i] === 'X') {
          window.alert('X HAS WON THE GAME');
        } else if (board[0][i] === 'O' && board[1][i] === 'O' && board[2][i] === 'O') {
          window.alert('O HAS WON THE GAME');
        }
      }
    });
  };



  // major diagonal check - there is only 1 diagonal
  // row 0,0 row 1,1 row 2,2 are the places on the board that need to be checked
  // store those values in an array and check them at the end
  // alert if there is a winner

  var majorDiagonalCheck = function(board) {
    var result = [];
    for (var i = 0; i < board.length; i++) {
      result.push(board[i][i]);
    }
    if (result[0] === 'X' && result[1] === 'X' && result[2] === 'X') {
      window.alert('X HAS WON THE GAME');
    } else if (result[0] === 'O' && result[1] === 'O' && result[2] === 'O') {
        window.alert('O HAS WON THE GAME');
      }
  };

  // minor diagonal check - there is only 1 diagonal
  // row 0,2 row 1,1 row 2, 0 are the places that need to be checked
  // alert if there is a winner

  var minorDiagonalCheck = function(board) {
    var result = [];
    counter = 0;
    for (var i = board.length - 1; i >= 0; i--) {
      result.push(board[counter][i]);
      counter++;
    }
    if (result[0] === 'X' && result[1] === 'X' && result[2] === 'X') {
      window.alert('X HAS WON THE GAME');
    } else if (result[0] === 'O' && result[1] === 'O' && result[2] === 'O') {
        window.alert('O HAS WON THE GAME');
      }
  };
  // function to run all check position methods
  // check for ties by iterating through the board
  // if a piece is in position, then push it to the results array
  // if the board is full it is a tie game
  // so if results equals 9 alert tie game

  var checkBoard = function(board) {
    rowCheck(board);
    columnCheck(board);
    majorDiagonalCheck(board);
    minorDiagonalCheck(board);

    var results = [];

    for (var i = 0; i < board.length; i++) {
      board[i].forEach(function(item) {
        if (item.length > 0) {
          results.push(item);
        }  
      })
    }
    if (results.length === 9) {
      window.alert('TIE GAME!');
    }  
  }











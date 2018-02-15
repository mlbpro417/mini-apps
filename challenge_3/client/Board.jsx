import React from 'react';
import {render} from 'react-dom';

class Board extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      board: [
        [[],[],[],[],[],[],[],[]],
        [[],[],[],[],[],[],[],[]],
        [[],[],[],[],[],[],[],[]],
        [[],[],[],[],[],[],[],[]],
        [[],[],[],[],[],[],[],[]],
        [[],[],[],[],[],[],[],[]],
        [[],[],[],[],[],[],[],[]],
        [[],[],[],[],[],[],[],[]]
      ]
    }
    //this.setPieceIntoBoardState = this.setPieceIntoBoardState.bind(this);
  }


  dropPieceIntoColumn(column) {
  for (var i = this.state.board.length - 1; i >= 0; i--) {
    if (this.state.board[i][column].length === 0) {
      this.state.board[i][column] = 'X';
      console.log(this.state.board);
      this.setState(this.state.board);
      return;
    }
  }
}

  handleClick(id) {
    console.log('Click happened', this.state);
    this.dropPieceIntoColumn(id);
  }

  render () {
    return (
      <div id="board">
      <p>Welcome to Connect Four</p>
      <table>
        <tr id="columns">
          <td id="columnZero" onClick={(e) => this.handleClick(0, e)}>0</td>
          <td id="columnOne" onClick={(e) => this.handleClick(1, e)}>1</td>
          <td id="columnTwo" onClick={(e) => this.handleClick(2, e)}>2</td>
          <td id="columnThree" onClick={(e) => this.handleClick(3, e)}>3</td>
          <td id="columnFour" onClick={(e) => this.handleClick(4, e)}>4</td>
          <td id="columnFive" onClick={(e) => this.handleClick(5, e)}>5</td>
          <td id="columnSix" onClick={(e) => this.handleClick(6, e)}>6</td>
          <td id="columnSeven" onClick={(e) => this.handleClick(7, e)}>7</td>
        </tr>
        <tr id="rowZero">
          <td id="zeroZero">{this.state.board[0][0]}</td>
          <td id="zeroOne">{this.state.board[0][1]}</td>
          <td id="zeroTwo">{this.state.board[0][2]}</td>
          <td id="zeroThree">{this.state.board[0][3]}</td>
          <td id="zeroFour">{this.state.board[0][4]}</td>
          <td id="zeroFive">{this.state.board[0][5]}</td>
          <td id="zeroSix">{this.state.board[0][6]}</td>
          <td id="zeroSeven">{this.state.board[0][7]}</td>
        </tr>
        <tr id="rowOne">
          <td id="oneZero">{this.state.board[1][0]}</td>
          <td id="oneOne">{this.state.board[1][1]}</td>
          <td id="oneTwo">{this.state.board[1][2]}</td>
          <td id="oneThree">{this.state.board[1][3]}</td>
          <td id="oneFour">{this.state.board[1][4]}</td>
          <td id="oneFive">{this.state.board[1][5]}</td>
          <td id="oneSix">{this.state.board[1][6]}</td>
          <td id="oneSeven">{this.state.board[1][7]}</td>
        </tr>
        <tr id="rowTwo">
          <td id="twoZero">{this.state.board[2][0]}</td>
          <td id="twoOne">{this.state.board[2][1]}</td>
          <td id="twoTwo">{this.state.board[2][2]}</td>
          <td id="twoThree">{this.state.board[2][3]}</td>
          <td id="twoFour">{this.state.board[2][4]}</td>
          <td id="twoFive">{this.state.board[2][5]}</td>
          <td id="twoSix">{this.state.board[2][6]}</td>
          <td id="twoSeven">{this.state.board[2][7]}</td>
        </tr>
        <tr id="rowThree">
          <td id="threeZero">{this.state.board[3][0]}</td>
          <td id="threeOne">{this.state.board[3][1]}</td>
          <td id="threeTwo">{this.state.board[3][2]}</td>
          <td id="threeThree">{this.state.board[3][3]}</td>
          <td id="threeFour">{this.state.board[3][4]}</td>
          <td id="threeFive">{this.state.board[3][5]}</td>
          <td id="threeSix">{this.state.board[3][6]}</td>
          <td id="threeSeven">{this.state.board[3][7]}</td>
        </tr>
        <tr id="rowFour">
          <td id="fourZero">{this.state.board[4][0]}</td>
          <td id="fourOne">{this.state.board[4][1]}</td>
          <td id="fourTwo">{this.state.board[4][2]}</td>
          <td id="fourThree">{this.state.board[4][3]}</td>
          <td id="fourFour">{this.state.board[4][4]}</td>
          <td id="fourFive">{this.state.board[4][5]}</td>
          <td id="fourSix">{this.state.board[4][6]}</td>
          <td id="fourSeven">{this.state.board[4][7]}</td>
        </tr>
        <tr id="rowFive">
          <td id="fiveZero">{this.state.board[5][0]}</td>
          <td id="fiveOne">{this.state.board[5][1]}</td>
          <td id="fiveTwo">{this.state.board[5][2]}</td>
          <td id="fiveThree">{this.state.board[5][3]}</td>
          <td id="fiveFour">{this.state.board[5][4]}</td>
          <td id="fiveFive">{this.state.board[5][5]}</td>
          <td id="fiveSix">{this.state.board[5][6]}</td>
          <td id="fiveSeven">{this.state.board[5][7]}</td>
        </tr>
        <tr id="rowSix">
          <td id="sixZero">{this.state.board[6][0]}</td>
          <td id="sixOne">{this.state.board[6][1]}</td>
          <td id="sixTwo">{this.state.board[6][2]}</td>
          <td id="sixThree">{this.state.board[6][3]}</td>
          <td id="sixFour">{this.state.board[6][4]}</td>
          <td id="sixFive">{this.state.board[6][5]}</td>
          <td id="sixSix">{this.state.board[6][6]}</td>
          <td id="sixSeven">{this.state.board[6][7]}</td>
        </tr>
        <tr id="rowSeven">
          <td id="sevenZero">{this.state.board[7][0]}</td>
          <td id="sevenOne">{this.state.board[7][1]}</td>
          <td id="sevenTwo">{this.state.board[7][2]}</td>
          <td id="sevenThree">{this.state.board[7][3]}</td>
          <td id="sevenFour">{this.state.board[7][4]}</td>
          <td id="sevenFive">{this.state.board[7][5]}</td>
          <td id="sevenSix">{this.state.board[7][6]}</td>
          <td id="sevenSeven">{this.state.board[7][7]}</td>
        </tr>
      </table>
      </div>
    )
  }
}

export default Board;
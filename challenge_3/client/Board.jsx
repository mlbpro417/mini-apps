import React from 'react';
import {render} from 'react-dom';

class Board extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <div id="board">
      <p>Welcome to Connect Four</p>
      <table>
        <tr id="columns">
          <td id="columnZero">0</td>
          <td id="columnOne">1</td>
          <td id="columnTwo">2</td>
          <td id="columnThree">3</td>
          <td id="columnFour">4</td>
          <td id="columnFive">5</td>
          <td id="columnSix">6</td>
          <td id="columnSeven">7</td>
        </tr>
        <tr id="rowZero">
          <td id="zeroZero">.</td>
          <td id="zeroOne">.</td>
          <td id="zeroTwo">.</td>
          <td id="zeroThree">.</td>
          <td id="zeroFour">.</td>
          <td id="zeroFive">.</td>
          <td id="zeroSix">.</td>
          <td id="zeroSeven">.</td>
        </tr>
        <tr id="rowOne">
          <td id="oneZero">.</td>
          <td id="oneOne">.</td>
          <td id="oneTwo">.</td>
          <td id="oneThree">.</td>
          <td id="oneFour">.</td>
          <td id="oneFive">.</td>
          <td id="oneSix">.</td>
          <td id="oneSeven">.</td>
        </tr>
        <tr id="rowTwo">
          <td id="twoZero">.</td>
          <td id="twoOne">.</td>
          <td id="twoTwo">.</td>
          <td id="twoThree">.</td>
          <td id="twoFour">.</td>
          <td id="twoFive">.</td>
          <td id="twoSix">.</td>
          <td id="twoSeven">.</td>
        </tr>
        <tr id="rowThree">
          <td id="threeZero">.</td>
          <td id="threeOne">.</td>
          <td id="threeTwo">.</td>
          <td id="threeThree">.</td>
          <td id="threeFour">.</td>
          <td id="threeFive">.</td>
          <td id="threeSix">.</td>
          <td id="threeSeven">.</td>
        </tr>
        <tr id="rowFour">
          <td id="fourZero">.</td>
          <td id="fourOne">.</td>
          <td id="fourTwo">.</td>
          <td id="fourThree">.</td>
          <td id="fourFour">.</td>
          <td id="fourFive">.</td>
          <td id="fourSix">.</td>
          <td id="fourSeven">.</td>
        </tr>
        <tr id="rowFive">
          <td id="fiveZero">.</td>
          <td id="fiveOne">.</td>
          <td id="fiveTwo">.</td>
          <td id="fiveThree">.</td>
          <td id="fiveFour">.</td>
          <td id="fiveFive">.</td>
          <td id="fiveSix">.</td>
          <td id="fiveSeven">.</td>
        </tr>
        <tr id="rowSix">
          <td id="sixZero">.</td>
          <td id="sixOne">.</td>
          <td id="sixTwo">.</td>
          <td id="sixThree">.</td>
          <td id="sixFour">.</td>
          <td id="sixFive">.</td>
          <td id="sixSix">.</td>
          <td id="sixSeven">.</td>
        </tr>
        <tr id="rowSeven">
          <td id="sevenZero">.</td>
          <td id="sevenOne">.</td>
          <td id="sevenTwo">.</td>
          <td id="sevenThree">.</td>
          <td id="sevenFour">.</td>
          <td id="sevenFive">.</td>
          <td id="sevenSix">.</td>
          <td id="sevenSeven">.</td>
        </tr>
      </table>
    </div>
    )
  }
}

export default Board;
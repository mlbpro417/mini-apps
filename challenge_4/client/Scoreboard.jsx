import React from 'react';
import {render} from 'react-dom';

class Scoreboard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentRoll: 0,
      currentRound: 1,
      numberOfPinsRemaining: 10,
      isSecondRoll: false,
      scoreboard: [[],[],[],[],[],[],[],[],[],[]]
    };
  }

  // to do 

  // set up scoreboard
  // make a table with 10 rounds and the score beneath it
  
  // set up random number generator
  // should include 0-10

  getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  // bowling game mechanics
  // there are 10 pins 
  // use a random number generator to bowl each turn from 0-10
  // there are two turns per round
  // if the bowler gets a 10 (strike) on turn 1, the turn is over
   // after the first turn, calculate number of pins remaining 10 - (rng)
  // if the number if greater than 0 you get to take turn 2 
  // then repeat the rng again for the remaining amount of pins for turn 2
  // after turn 2 is complete, add the total number of pins knocked down to scoreboard for the round

  individualRoundOfBowling(pinsKnockedDown) {
    let numberOfPinsRemaining = 10 - pinsKnockedDown;
    if (this.state.isSecondRoll === false) {
      if (numberOfPinsRemaining > 0) {
        this.state.scoreboard[this.state.currentRound - 1].push(pinsKnockedDown);
        this.setState(this.state.scoreboard);
        this.state.isSecondRoll = true;
        this.setState(this.state.isSecondRoll);
        this.state.numberOfPinsRemaining = numberOfPinsRemaining;
        this.setState(this.state.numberOfPinsRemaining);
      } else {
        this.state.scoreboard[this.state.currentRound - 1] = 10;
        this.setState(this.state.scoreboard);
        this.state.numberOfPinsRemaining = 10;
        this.setState(this.state.numberOfPinsRemaining);
        this.setState(this.state.currentRound ++);
      }  
    }
  }

  secondRollOfIndividualRoundOfBowling(numberOfPinsRemaining) {
    let secondRoundPinsRemaining = numberOfPinsRemaining;
    if (numberOfPinsRemaining > 0) {
        this.state.scoreboard[this.state.currentRound - 1].push(numberOfPinsRemaining);
        this.setState(this.state.scoreboard);
        this.state.isSecondRoll = false;
        this.setState(this.state.isSecondRoll);
        this.state.numberOfPinsRemaining = 10;
        this.setState(this.state.numberOfPinsRemaining);
        this.setState(this.state.currentRound ++);
      } else {
        this.state.scoreboard[this.state.currentRound - 1] = secondRoundPinsRemaining;
        this.setState(this.state.scoreboard);
        this.state.isSecondRoll = false;
        this.setState(this.state.isSecondRoll);
        this.state.numberOfPinsRemaining = 10;
        this.setState(this.state.numberOfPinsRemaining);
        this.setState(this.state.currentRound ++);
      }  
  }

  handleClick() {
    let numberOfPinsRemaining = this.state.numberOfPinsRemaining;
    let pinsKnockedDown = this.getRandomNumber(0, numberOfPinsRemaining);
    if (this.state.isSecondRoll === false) {
      this.individualRoundOfBowling(pinsKnockedDown);   
    } else {
      this.secondRollOfIndividualRoundOfBowling(pinsKnockedDown);
    }
    
  }

  //scoring mechanics
  // if the first turn knocks down less than 10 pins, then go again
  // if they dont knock down the remaining pins, only the amount of pins they knocked
  // down gets added to the score

  // if they knock down the remaining pins, they get a spare
  // spares will add the next roll to the score of the frame the spare happened in
  // if they knock all the pins down on the first try it is a strike
  // strikes will add the next two rolls to the score of the frame the strike happened in


  render() {
    return (
      <div>
        <button name="bowling" onClick={(e) => this.handleClick()}>Roll the ball!</button>
        <div name="currentRoll">You rolled a {this.state.currentRoll}!!!</div>
        <div name="currentRound">This is round {this.state.currentRound}.</div>
        <table>
          <tr>
            <td>Round 1</td>
            <td>Round 2</td>
            <td>Round 3</td>
            <td>Round 4</td>
            <td>Round 5</td>
            <td>Round 6</td>
            <td>Round 7</td>
            <td>Round 8</td>
            <td>Round 9</td>
            <td>Round 10</td>
          </tr>
          <tr> 
            <td>{this.state.scoreboard[0]}</td>
            <td>{this.state.scoreboard[1]}</td>
            <td>{this.state.scoreboard[2]}</td>
            <td>{this.state.scoreboard[3]}</td>
            <td>{this.state.scoreboard[4]}</td>
            <td>{this.state.scoreboard[5]}</td>
            <td>{this.state.scoreboard[6]}</td>
            <td>{this.state.scoreboard[7]}</td>
            <td>{this.state.scoreboard[8]}</td>
            <td>{this.state.scoreboard[9]}</td>
          </tr>
        </table>  
      </div>
    );
  }
}

export default Scoreboard;
import React from 'react';
import {render} from 'react-dom';
import AwesomeComponent from './AwesomeComponent.jsx';
import Board from './Board.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render () {
    return (
      <div>
        <p> Hello React!</p>
        
        <Board
        id="board" />
      </div>
    )
  }
}

render(<App/>, document.getElementById('app'));
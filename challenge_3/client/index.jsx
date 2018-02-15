import React from 'react';
import {render} from 'react-dom';
import Board from './Board.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render () {
    return (
      <div>
        <p> Hello World</p>
        
        <Board
        id="board" />
      </div>
    )
  }
}

render(<App/>, document.getElementById('app'));
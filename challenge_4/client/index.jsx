import React from 'react';
import {render} from 'react-dom';
import Scoreboard from './Scoreboard.jsx'

class App extends React.Component {
  render () {
    return (
      <div>
        <p> Hello React!</p>
        <Scoreboard />
      </div>
    );
  }
}
  
render(<App/>, document.getElementById('app'));
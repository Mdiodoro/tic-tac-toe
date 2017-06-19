import React, { Component } from 'react';
import Board from './Board'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Board />
      </div>
    );
  }
}

export default App;


//  need to be able to render seperate boxes
//  need to be able to add icons to those boxes
//  make three divs
//  each div will house three sections
//  when a user clicks a section it will turn to either an X or an O depending on whos turn it is

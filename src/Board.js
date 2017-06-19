import React from 'react';


class Board extends React.Component {
  constructor() {
    super();
    this.state = {
      rowNames: ['first', 'second', 'third'],
    }
  }

  render() {
    const rowNames = ['first', 'second', 'third'];
    return (
      'hello'
    )
  }
}

const styles = {
  rowStyle: {
    display: 'inline-block',
  }
}

export default Board;
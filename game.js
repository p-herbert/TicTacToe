const prompt = require('prompt');
const _ = require('underscore');

class TicTacToe {
  constructor(options) {
    this.board = [['', '', ''], ['', '', ''], ['', '', '']];
    this.playerOne = options.one;
    this.playerTwo = options.two;
    this.winner = false;
  }

  // Print the board
  printBoard() {
    this.board.forEach(row => console.log(row));
  }

  // Mark the position on the board
  draw(pos, mark) {
    this.board[pos[0]][pos[1]] = mark;
  }

  // Determine if there is a winner
  winner() {
    // Check the rows
    this.board.forEach((row) => {
      if (row[0] === row[1] && row[1] === row[2]) {
        if (row[0] === 'x') {
          console.log(this.playerOne + ' is the winner!');
        } else {
          console.log(this.playerTwo + ' is the winner!');
        }
        this.winner = true;
      }
    });

    // Check the columns
    _.zip(this.board).forEach((col) => {
      if (col[0] === col[1] && col[1] === col[2]) {
        if (col[0] === 'x') {
          console.log(this.playerOne + ' is the winner!');
        } else {
          console.log(this.playerTwo + ' is the winner!');
        }
        this.winner = true;
      }
    });

    // Check diagonal
    if (this.board[0][0] === this.board[1][1] && this.board[1][1] === this.board[2][2]) {
      if (this.board[0][0] === 'x') {
        console.log(this.playerOne + ' is the winner!');
      } else {
        console.log(this.playerTwo + ' is the winner!');
      }
      this.winner = true;
    }

    // Check diagonal
    if (this.board[0][2] === this.board[1][1] && this.board[1][1] === this.board[0][2]) {
      if (this.board[0][2] === 'x') {
        console.log(this.playerOne + ' is the winner!');
      } else {
        console.log(this.playerTwo + ' is the winner!');
      }
      this.winner = true;
    }
  }

  // Check if position is empty
  checkPos(pos) {
    return this.board[pos[0]][pos[1]] === '';
  }

  // Check user input
  checkInput(pos) {
    return 0 <= pos[0] && pos[0] <= 2 && 0 <= pos[1] && pos[1] <= 2;
  }
}

prompt.start();

prompt.get(['Enter a name for Player One (Xs)', 'Enter a name for Player Two (Os)'], (err, result) => {
//   console.log('Enter a name for Player One (Xs) ' + result.playerOne);
//   console.log('Enter a name for Player Two (Os) ' + result.playerTwo);
});


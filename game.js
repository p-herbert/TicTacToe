const prompt = require('prompt');
const _ = require('underscore');

class TicTacToe {
  constructor(options) {
    this.board = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];
    this.playerOne = options.one;
    this.playerTwo = options.two;
//     this.winner = false;
  }

  // Print the board
  print() {
    console.log(' ', this.board[0].join(' | '));
    console.log(' - - - - - -');
    console.log(' ', this.board[1].join(' | '));
    console.log(' - - - - - -');
    console.log(' ', this.board[2].join(' | '));
  }

  // Mark the position on the board
  draw(pos, mark) {
    if (this.checkInput(pos) && this.checkPosition(pos)) {
      this.board[pos[0]][pos[1]] = mark;
    } else {
      console.log('Invalid Position!');
    }

    this.print();
  }

  // Determine if there is a winner
  winner(pos) {
    const row = pos[0];
    const col = pos[1];

    // Check row
    if (this.board[row][0] === this.board[row][1] &&
        this.board[row][1] === this.board[row][2]) {
      return true;
    // Check column
    } else if (this.board[0][col] === this.board[1][col] &&
               this.board[1][col] === this.board[2][col]) {
      return true;
    // Check diagonal
    } else if (row === col &&
               this.board[0][0] === this.board[1][1] &&
               this.board[1][1] === this.board[2][2]) {
      return true;
    // Check diagonal
    } else if (row + col === 2 &&
               this.board[0][2] === this.board[1][1] &&
               this.board[1][1] === this.board[2][0]) {
      return true;
    }

    return false;
  }

  // Check if position is empty
  checkPosition(pos) {
    return this.board[pos[0]][pos[1]] === ' ';
  }

  // Check user input
  checkInput(pos) {
    return 0 <= pos[0] && pos[0] <= 2 && 0 <= pos[1] && pos[1] <= 2;
  }

//   hasWinner() {
//    return this.winner;
//   }
}

const game = new TicTacToe({one: 'Pete', two: 'Lou'});
game.print();

// prompt.start();
//
// prompt.get(['Enter a name for Player One (Xs)', 'Enter a name for Player Two (Os)'], (err, result) => {
// //   console.log('Enter a name for Player One (Xs) ' + result.playerOne);
// //   console.log('Enter a name for Player Two (Os) ' + result.playerTwo);
// });


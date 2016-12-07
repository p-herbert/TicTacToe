const prompt = require('prompt');
const _ = require('underscore');

class TicTacToe {
  constructor(options) {
    this.board = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];
    this.playerOne = options.one;
    this.playerTwo = options.two;
    this.count = 0;
  }

  // Print the board
  print() {
    console.log('\n\n');
    console.log(' ', this.board[0].join(' | '));
    console.log(' - - - - - -');
    console.log(' ', this.board[1].join(' | '));
    console.log(' - - - - - -');
    console.log(' ', this.board[2].join(' | '));
    console.log('\n\n');
  }

  // Mark the position on the board
  move(pos, mark) {
    if (this.checkInput(pos) && this.checkPosition(pos)) {
      this.board[pos[0]][pos[1]] = mark;
      this.count += 1;
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

  // Determine if there is a draw
  draw() {
    return this.count === 9;
  }

  // Check if position is empty
  checkPosition(pos) {
    return this.board[pos[0]][pos[1]] === ' ';
  }

  // Check user input
  checkInput(pos) {
    return 0 <= pos[0] && pos[0] <= 2 && 0 <= pos[1] && pos[1] <= 2;
  }
}

prompt.start();

prompt.get([{
  name: 'one',
  description: 'Enter a name for Player One (Xs): ',
  type: 'string',
  required: true },
{
  name: 'two',
  description: 'Enter a name for Player Two (Os): ',
  type: 'string',
  required: true }],
function(err, results) {
  const game = new TicTacToe(results);
  game.print();
});


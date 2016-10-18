const prompt = require('prompt');

class TicTacToe {
  constructor(options) {
    this.board = [['', '', ''], ['', '', ''], ['', '', '']];
    this.playerOne = options.one;
    this.playerTwo = options.two;
  }

  // Print the board
  printBoard() {

  }

  // Mark the position on the board
  draw(pos, mark) {
    this.board[pos[0]][pos[1]] = mark;
  }

  // Determine if there is a winner
  winner() {

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


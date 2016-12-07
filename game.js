const prompt = require('prompt');
const _ = require('underscore');

class TicTacToe {
  constructor(props) {
    this.board = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];
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
    this.board[pos[0]][pos[1]] = mark;
    this.count += 1;
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

const game = new TicTacToe();
const players = [];
let currentPlayer = 0;

const playerMove = (name, marker) => {
  game.print();

  prompt.get({
    name: 'move',
    description: name + ', enter your move (row[0-2] column[0-2])',
    type: 'string',
    pattern: /\d\s\d/,
    conform: (move) => {
      const row = +move.split(' ')[0];
      const col = +move.split(' ')[1];
      return game.checkInput([row, col]) && game.checkPosition([row, col]);
    },
    before: value => [+value.split(' ')[0], +value.split(' ')[1]] },
    (err, result) => {
      game.move(result.move, marker);

      if (game.winner(result.move)) {
        console.log('CONGRATS ' + name + '!');
        game.print();
      } else if (game.draw()) {
        console.log('DRAW');
        game.print();
      } else {
        currentPlayer = +!currentPlayer;
        playerMove(players[currentPlayer].name, players[currentPlayer].marker);
      }
    });
};

prompt.start();
prompt.get([{
  name: 'one',
  description: 'Enter a name for Player One (Xs)',
  type: 'string',
  required: true },
{
  name: 'two',
  description: 'Enter a name for Player Two (Os)',
  type: 'string',
  required: true }],
(err, playerNames) => {
  players.push({ name: playerNames.one, marker: 'x' });
  players.push({ name: playerNames.two, marker: 'o' });

  playerMove(players[currentPlayer].name, players[currentPlayer].marker);
});
prompt.stop();


const {log} = console
const BoardSize = 16
class Board {
    constructor() {
        this.board = Array.from({ length: BoardSize }, () =>
            Array(BoardSize).fill(0b0000000000000000)
        );
    }
}
function setPiece(row, col, player, board) {
    board[row] |= player << col*2;
    return board;
}
function printBoard(board) {
    for (let row = 0; row < board.length; row++) {
      let rowString = '';
      for (let col = 0; col < BoardSize; col++) {
        const shift = col * 2;
        const piece = (board[row] >> shift) & 0b11;
        if (piece === 0b01) {
          rowString += '1 ';
        } else if (piece === 0b10) {
          rowString += '2 ';
        } else {
          rowString += '0 ';
        }
      }
      console.log(rowString);
    }
  }
  class MCTS{
    constructor(board){
      this.board = board
      this.wins = 0
      this.visits = 0;
      this.children = [];
    }
    isLeaf() {
      
      // check if children length is 0 or there is a win
    }
    selection() {
      // TODO: Implement the selectionm action  step
    }
  
    expand() {
      // TODO: Implement the expansion step
    }
  
    simulate() {
      // TODO: Implement the simulation step
    }
  
    backpropagate(result) {
      // TODO: Implement the backpropagation step
    }
  
  
  }
function simulateAIPlay() {
    let board = new Board();
    console
    setPiece(0, 3, 1, board.board)
    setPiece(0, 0, 2, board.board)
    setPiece(1, 5, 2, board.board)

    printBoard(board.board);
    let player = 1;
    let totalMove = 9;
    // for (var i = 0; i < totalMove; i++) {
    //     board = findNextMove(board, player);
    //     if (board.checkStatus() !== -1) {
    //         break;
    //     }
    //     player = 3 - player;
    // }
    // let winStatus = board.checkStatus();
    // return winStatus;
}


simulateAIPlay()
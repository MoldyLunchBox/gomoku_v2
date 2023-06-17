const { log } = console
const BOARDSIZE = 16
const BLACK = 1
const WHITE = 2

const WHITE_MASKS = {
0b0100000000: 1,
0b0001000000: 1,
0b0000010000: 1,
0b0000000100: 1,
0b0000000001: 1,
0b0101000000: 10,
0b0100010000: 10,
0b0001010000: 10,
0b0100000100: 10,
0b0001000100: 10,
0b0000010100: 10,
0b0100000001: 10,
0b0001000001: 10,
0b0000010001: 10,
0b0000000101: 10,
0b0101010000: 100,
0b0101000100: 100,
0b0100010100: 100,
0b0001010100: 100,
0b0101000001: 100,
0b0100010001: 100,
0b0001010001: 100,
0b0100000101: 100,
0b0001000101: 100,
0b0000010101: 100,
0b0101010100: 1000,
0b0101010001: 1000,
0b0101000101: 1000,
0b0100010101: 1000,
0b0001010101: 1000}
const BLACK_MASKS = {
0b1000000000: 1,
0b0010000000: 1,
0b0000100000: 1,
0b0000001000: 1,
0b0000000010: 1,
0b1010000000: 10,
0b1000100000: 10,
0b0010100000: 10,
0b1000001000: 10,
0b0010001000: 10,
0b0000101000: 10,
0b1000000010: 10,
0b0010000010: 10,
0b0000100010: 10,
0b0000001010: 10,
0b1010100000: 100,
0b1010001000: 100,
0b1000101000: 100,
0b0010101000: 100,
0b1010000010: 100,
0b1000100010: 100,
0b0010100010: 100,
0b1000001010: 100,
0b0010001010: 100,
0b0000101010: 100,
0b1010101000: 1000,
0b1010100010: 1000,
0b1010001010: 1000,
0b1000101010: 1000,
0b0010101010: 1000}

function verifyBounds(y, x) {
  if (y >= 0 && y < BOARDSIZE && x >= 0 && x < BOARDSIZE)
    return true;
  return false;
}
class Board {
  constructor(board, player, newPiece, score) {
    if (board) {
      this.board = board
    } else {
      this.board = Array.from({ length: BOARDSIZE }, () =>
        Array(BOARDSIZE).fill(0b0000000000000000)
      )
    }
    this.player = player
    this.newPiece = newPiece
    this.childs = this.getChilds
    this.score = score
  }

  getChilds() {
    let count = []
    let dy = [1, 0, 1, -1];   // vertical, horizental, diag to bottom right,  diag to top right
    let dx = [0, 1, 1, 1];
    for (let i = 0; i < BOARDSIZE; i++) {
      count[i] = []
      for (let j = 0; j < BOARDSIZE; j++) {
        count[i][j] = []
        for (let dir = 0; dir < 4; dir++) {
          count[i][j][dir] = 0;
          for (let pos = -4; pos < 5; pos++) {
            if (!verifyBounds(i + dy[dir] * pos, j + dx[dir] * pos)){
                count[i][j][dir] |= (3 << (pos * 2 + 8));
                // log(count[i][j][dir])
            }
              else{
                //   log("y:", i + dy[dir] * pos, "x:",j + dx[dir] * pos,  getPiece(i + dy[dir] * pos, j + dx[dir] * pos, this.board), count[i][j][dir], dec2bin(count[i][j][dir])) 
                count[i][j][dir] |= (getPiece(i + dy[dir] * pos, j + dx[dir] * pos, this.board) << (pos * 2 + 8));
                if (i == 0 && j == 4 && dir == 1){
  log(i + dy[dir] * pos,j + dx[dir] * pos,  dec2bin(count[0][4][1]))
                }
                //   log("y:", i + dy[dir] * pos, "x:",j + dx[dir] * pos,  getPiece(i + dy[dir] * pos, j + dx[dir] * pos, this.board), count[i][j][dir], dec2bin(count[i][j][dir])) 
// log("-----\n")
                }
          }
        //   exit()
        }
      }
    }
    // get childs  100000000001  1000000001
    log(count[0][4][1] )
    log(count[0][4][1] & 0b1001000000)
let res = (((count[0][4][1]) >> (2 * 0)) & ((1 << 10) - 1));
    log(dec2bin(count[0][4][1]))

  }

}
function dec2bin(dec) {
    return (dec).toString(2);
  }
function getPiece(row, col, board){
    const shift = col * 2;
    const piece = (board[row] >> shift) & 0b11;
    return piece
}
function setPiece(row, col, player, board) {
  board[row] |= player << col * 2;
  return board;
}

function printBoard(board) {
  for (let row = 0; row < board.length; row++) {
    let rowString = '';
    for (let col = 0; col < BOARDSIZE; col++) {
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

function isLeaf() {

  // check if children length is 0 or there is a win
}
function selection() {
  // TODO: Implement the selectionm action  step
}

function expand() {
  // TODO: Implement the expansion step
}

function simulate(node) {
  // while piece in  board
  //   direction from piece
  //      if piece direction is outside bounds
  //          piece direction at position is 3
  //      else it stays 0
  // TODO: Implement the simulation step
}

function backpropagate(result) {
  // TODO: Implement the backpropagation step
}


let MTCSS = {
  getNextMove: (board, player) => {
    // while loop < 1 second
    // perform selection

  }
}
function simulateAIPlay() {

  let board = new Board();
  console.log(board.board)
  setPiece(0, 0, 1, board.board)
  setPiece(0, 4, 2, board.board)

  printBoard(board.board);
  board.getChilds()
  let player = 1;
  let totalMove = 9;
  // for (var i = 0; i < totalMove; i++) {        // 1000000001 1000000001
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
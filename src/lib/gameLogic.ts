import type { Board, Side } from "./types";

// Winning combinations - a constant because it doesn't change
const WINNING_COMBOS = [
  [0, 1, 2], // Top row
  [0, 3, 6], // Left column
  [3, 4, 5], // Middle row
  [1, 4, 7], // Middle column
  [6, 7, 8], // Bottom row
  [2, 5, 8], // Right column
  [0, 4, 8], // Main diagonal
  [2, 4, 6], // Counter diagonal
];

const POS_INF = Number.POSITIVE_INFINITY; // positive infinity
const NEGA_INF = Number.NEGATIVE_INFINITY; //negative infinity

/**
 * Updates the game board with the specified move.
 * If the move is valid, it creates a new board with the move made and returns it.
 * If the move is invalid, it returns false.
 *
 * @param {Board} board - The current state of the game board.
 * @param {number} move - The index of the cell where the move is to be made.
 * @param {Side} side - The side making the move, either "X" or "O".
 * @returns The updated game board with the move made, or false if the move is invalid.
 */
function makeMove(board: Board, move: number, side: Side) {
  if (board[move]) return false;

  board[move] = side;
  return board;
}

function isWinner(board: Board, side: Side) {
  for (const combo of WINNING_COMBOS) {
    const [a, b, c] = combo;
    if (board[a] === side && board[b] === side && board[c] === side) {
      return true;
    }
  }

  return false;
}

function isDraw(board: Board) {
  const xWon = isWinner(board, "X");
  const oWon = isWinner(board, "O");
  return !xWon && !oWon && board.every(cell => cell);
}

function AIMove(board: Board, side: Side = "O") {
  let bestScore = NEGA_INF;
  let bestMove = -1;

  board.forEach((cell, index) => {
    if (!cell) {
      const boardCopy = [...board];
      boardCopy[index] = side;
      const score = minimax(boardCopy, side, false);
      if (score > bestScore) {
        bestScore = score;
        bestMove = index;
      }
    }
  });

  // Ensure that the move is valid before returning it
  return bestMove !== -1 && makeMove(board, bestMove, side);
}

function minimax(board: Board, side: Side, isMaximizing: boolean, depth = 0) {
  const opponent = side === "X" ? "O" : "X";
  if (isWinner(board, side)) return 1 / (depth + 1);
  if (isDraw(board)) return 0;
  if (isWinner(board, opponent)) return -1 / (depth + 1);

  // maximizing
  if (isMaximizing) {
    let bestScore = NEGA_INF;
    board.forEach((cell, index) => {
      if (!cell) {
        const newBoard = [...board];
        newBoard[index] = side;
        const score = minimax(newBoard, side, false, depth + 1);
        if (score > bestScore) bestScore = score;
      }
    });
    return bestScore;
  }

  // minimizing
  let bestScore = POS_INF;
  board.forEach((cell, index) => {
    if (!cell) {
      const newBoard = [...board];
      newBoard[index] = opponent;
      const score = minimax(newBoard, side, true, depth + 1);
      if (score < bestScore) bestScore = score;
    }
  });

  return bestScore;
}

function randomAi(board: Board) {
  // If the game has ended, don't play anymore
  if (board.every(cell => cell)) return;

  let move: number;
  do {
    move = Math.floor(Math.random() * 9); // random cell from 0 to 8
  } while (board[move]);

  board[move] = "O";
  return board;
}

export { AIMove, WINNING_COMBOS, isDraw, isWinner, makeMove, randomAi };

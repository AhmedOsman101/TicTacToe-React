// Winning combinations - a constant because it doesn't change
export const WINNING_COMBOS = [
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
 * @param {Array} board - The current state of the game board.
 * @param {number} move - The index of the cell where the move is to be made.
 * @param {string} side - The side making the move, either "X" or "O".
 * @returns {Array|boolean} - The updated game board with the move made, or false if the move is invalid.
 */
export const makeMove = (board, move, side) => {
  if (!board[move]) {
    const newBoard = [...board];
    newBoard[move] = side;
    return newBoard;
  }
  return false;
};

export const isWinner = (board, side) => {
  for (let i = 0; i < WINNING_COMBOS.length; i++) {
    const [a, b, c] = WINNING_COMBOS[i];
    if (board[a] === side && board[b] === side && board[c] === side) {
      return true;
    }
  }
  return false;
};

export const isDraw = board => {
  const xWon = isWinner(board, "X");
  const oWon = isWinner(board, "O");
  return !xWon && !oWon && board.every(cell => cell);
};

export const playerMove = (board, move, side = "X") => {
  return makeMove(board, move, side);
};

export const AIMove = (board, side = "O") => {
  let bestScore = NEGA_INF;
  let bestMove = false;

  board.forEach((cell, index) => {
    if (!cell) {
      const boardCopy = [...board];
      boardCopy[index] = side;
      const score = minimax(boardCopy, side, false);
      boardCopy[index] = false;
      if (score > bestScore) {
        bestScore = score;
        bestMove = index;
        console.log(`move: ${index}, BestScore: ${score}`);
      }
    }
  });

  // Ensure that the move is valid before returning it
  return bestMove !== false && makeMove(board, bestMove, side);
};

export const minimax = (board, side, isMaximizing, depth = 0) => {
  const opponent = side === "X" ? "O" : "X";
  if (isWinner(board, side)) return 1 / (depth + 1);
  if (isDraw(board)) return 0;
  if (isWinner(board, opponent)) return -1 / (depth + 1);

  if (isMaximizing) {
    let bestScore = NEGA_INF;
    board.forEach((cell, index) => {
      if (!cell) {
        const newBoard = [...board];
        newBoard[index] = side;
        const score = minimax(newBoard, side, false, depth + 1);
        newBoard[index] = null;
        if (score > bestScore) bestScore = score;
      }
    });
    return bestScore;
  } else {
    let bestScore = POS_INF;
    board.forEach((cell, index) => {
      if (!cell) {
        const newBoard = [...board];
        newBoard[index] = opponent;
        const score = minimax(newBoard, side, true, depth + 1);
        newBoard[index] = null;
        if (score < bestScore) bestScore = score;
      }
    });

    return bestScore;
  }
};

export const randomAi = board => {
  // If the game has ended, don't play anymore
  // if (gameEnded) return;
  const isBoardFull = board.every(cell => cell);
  if (isBoardFull) return;

  let move;
  do {
    move = Math.floor(Math.random() * 9);
  } while (board[move]);

  const newBoard = [...board];
  newBoard[move] = "O";
  return newBoard;
};

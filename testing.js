// Winning combinations - a constant because it doesn't change
export const WINNING_COMBOS = [
    [0, 1, 2], // Top row
    [3, 4, 5], // Middle row
    [6, 7, 8], // Bottom row
    [0, 3, 6], // Left column
    [1, 4, 7], // Middle column
    [2, 5, 8], // Right column
    [0, 4, 8], // Main diagonal
    [2, 4, 6], // Counter diagonal
];

const POS_INF = Number.POSITIVE_INFINITY; // positive infinity
const NEGA_INF = Number.NEGATIVE_INFINITY; //negative infinity

// The game board - let because it changes
let board = Array(9).fill(false);

const isFree = (move) => !board[move];

const makeMove = (move, side) => {
    if (isFree(move)) {
        // Create a new board array to avoid mutating the state directly
        let newBoard = [...board];
        newBoard[move] = side;
        board = newBoard;
        return board;
    }
    if (isWinner(board, side)) return `${side} is the winner!`;
    if (isDraw(board)) return "Draw";
};

const isWinner = (board, side) => {
    let boardCopy = [...board];
    for (let i = 0; i < WINNING_COMBOS.length; i++) {
        const [a, b, c] = WINNING_COMBOS[i];
        if (
            boardCopy[a] === side &&
            boardCopy[b] === side &&
            boardCopy[c] === side
        ) {
            return side;
        }
    }
    return false;
};

const isDraw = (board) => {
    let boardCopy = [...board];
    for (let i = 0; i < boardCopy.length; i++) {
        if (!boardCopy[i]) return false;
    }
    return true;
};

const playerMove = (move) => {
    return makeMove(move, "X");
};

const AIMove = (board) => {
    let bestScore = NEGA_INF;
    let bestMove = false;
    let boardCopy = [...board];
    boardCopy.forEach((cell, index) => {
        if (!cell) {
            boardCopy[index] = "O";
            const score = minimax(boardCopy, false);
            boardCopy[index] = false;
            if (score > bestScore) {
                bestScore = score;
                bestMove = index;
            }
        }
    });
    makeMove(bestMove, "O"); // Update the board with the best move
};

const minimax = (board, isMaximizing) => {
    if (isWinner(board, "X")) return -1;
    if (isWinner(board, "O")) return 1;
    if (isDraw(board)) return 0;

    if (isMaximizing) {
        let bestScore = NEGA_INF;
        board.forEach((cell, index) => {
            if (!cell) {
                let newBoard = [...board];
                newBoard[index] = "O";
                const score = minimax(newBoard, false); // Corrected parameter
                if (score > bestScore) bestScore = score;
            }
        });
        return bestScore;
    } else {
        let bestScore = POS_INF;
        board.forEach((cell, index) => {
            if (!cell) {
                let newBoard = [...board];
                newBoard[index] = "X";
                const score = minimax(newBoard, true); // Corrected parameter
                if (score < bestScore) bestScore = score;
            }
        });
        return bestScore;
    }
};

// playerMove(0);
// AIMove(board);
// playerMove(3);
// AIMove(board);
// playerMove(3);
// AIMove(board);
// playerMove(6);
// AIMove(board);
console.log(board);

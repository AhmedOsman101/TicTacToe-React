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

export const makeMove = (board, move, side) => {
    if (!board[move]) {
        let newBoard = [...board];
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

export const isDraw = (board) => {
    const xWon = isWinner(board, "X");
    const oWon = isWinner(board, "O");
    return !xWon && !oWon && board.every((cell) => cell);
};

export const playerMove = (board, move, side = "X") => {
    return makeMove(board, move, side);
};

export const AIMove = (board, side = "O") => {
    let bestScore = NEGA_INF;
    let bestMove = false;
    let boardCopy = [...board];

    boardCopy.forEach((cell, index) => {
        if (!cell) {
            boardCopy[index] = side;
            const score = minimax(boardCopy, side, false);
            boardCopy[index] = false;

            if (score > bestScore) {
                bestScore = score;
                bestMove = index;
            }
        }
    });

    // Ensure that the move is valid before returning it
    return bestMove !== false && makeMove(board, bestMove, side);
};

export const minimax = (board, side, isMaximizing) => {
    const opponent = side === "X" ? "O" : "X";

    if (isWinner(board, opponent)) return -1;
    if (isWinner(board, side)) return 1;
    if (isDraw(board)) return 0;

    if (isMaximizing) {
        let bestScore = NEGA_INF;
        board.forEach((cell, index) => {
            if (!cell) {
                let newBoard = [...board];
                newBoard[index] = side;
                const score = minimax(newBoard, side, false);
                if (score > bestScore) bestScore = score;
            }
        });

        return bestScore;
    } else {
        let bestScore = POS_INF;
        board.forEach((cell, index) => {
            if (!cell) {
                let newBoard = [...board];
                newBoard[index] = opponent;
                const score = minimax(newBoard, side, true);
                if (score < bestScore) bestScore = score;
            }
        });

        return bestScore;
    }
};

export const randomAi = (board) => {
    // If the game has ended, don't play anymore
    // if (gameEnded) return;
    const isBoardFull = board.every((cell) => cell);
    if (isBoardFull) return;

    let move;
    do {
        move = Math.floor(Math.random() * 9);
    } while (board[move]);

    const newBoard = [...board];
    newBoard[move] = "O";
    return newBoard;
};

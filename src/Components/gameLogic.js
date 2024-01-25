/**
 * Checks if a move is available on a given board.
 * @param {Array} board - The current state of the board.
 * @param {number} move - The move to check availability for.
 * @returns {boolean}  True if the move is available, false otherwise.
 */
// export const isAvailable = (board, move) => !board[move];

/**
 * Checks if the given array contains a winning combination.
 * @param {Array} array The array to check for winning combinations.
 * @returns {boolean} True if a winning combination is found, false otherwise.
 */
export const checkCombo = (array) => {
    return WINNING_COMBOS.some((combo) => {
        return combo.every((item) => array.includes(item)) && combo.length >= 3;
    });
};

/**
 * Checks if there is a winner in the current game state and updates the game
 * state accordingly.
 * @param {object} gameState - The current game state object.
 * @param {function} setGameState - The function to update the game state.
 * @returns {boolean}  Returns true if there is a winner, false otherwise.
 */
export const checkWinner = (gameState, setGameState) => {
    if (gameState.winner) return true;

    const XResults = checkCombo(gameState.XLocations);

    if (XResults) {
        setGameState((prev) => {
            return {
                ...prev,
                XScore: prev.XScore + 1,
                winner: "X",
                gameEnded: true,
            };
        });
        return true;
    }

    const OResults = checkCombo(gameState.OLocations);

    if (OResults) {
        setGameState((prev) => {
            return {
                ...prev,
                OScore: prev.OScore + 1,
                winner: "O",
                gameEnded: true,
            };
        });
        return true;
    }

    return false;
};

/**
 * Checks if the game has ended in a draw and updates the game state
 * accordingly.
 * @param {object} gameState - The current state of the game.
 * @param {function} setGameState - The function to update the game state.
 * @returns {boolean} True if the game has ended in a draw, false otherwise.
 */
export const checkDraw = (gameState, setGameState) => {
    if (gameState.winner || gameState.isDraw) return;
    const isBoardFull =
        gameState.XLocations.length + gameState.OLocations.length === 9;
    const noWinner = !gameState.winner;
    if (isBoardFull && noWinner) {
        setGameState((prev) => {
            return {
                ...prev,
                OScore: prev.OScore + 0.5,
                XScore: prev.XScore + 0.5,
                isDraw: true,
                gameEnded: true,
            };
        });
        return true;
    }
    return false;
};

/**
 * Generates a random move for the AI player in a tic-tac-toe game.
 * @param {object} gameState - The current state of the game.
 * @param {function} setGameState - A function to update the game state.
 */
export const randomAi = (gameState, setGameState) => {
    const isBoardFull =
        gameState.XLocations.length + gameState.OLocations.length === 9;

    if (gameState.gameEnded || isBoardFull || gameState.winner) return;

    let move;
    do {
        move = Math.floor(Math.random() * 9);
    } while (!isAvailable(gameState.board, move));

    const newBoard = [...gameState.board];
    newBoard[move] = "O";

    const newGameState = {
        ...gameState,
        XTurn: !gameState.XTurn,
        board: newBoard,
        OLocations: [...gameState.OLocations, move],
    };

    setGameState(newGameState);

    // Check for the end of the game after making a move
    if (
        checkWinner(newGameState, setGameState) ||
        checkDraw(newGameState, setGameState)
    )
        return;
};

/**
 * Resets the game state to its initial values.
 * @param {function} setGameState - The function to update the game state.
 */
export const Reset = (setGameState) => {
    setGameState((prev) => {
        return {
            ...prev,
            XTurn: true,
            XLocations: [],
            OLocations: [],
            winner: false,
            isDraw: false,
            gameEnded: false,
            board: Array(9).fill(false),
        };
    });
};

export const AdvancedAi = (gameState, setGameState) => {
    //
};

/**
 * Checks if there is a winner in the current game state and updates the game
 * state accordingly.
 * @param {object} gameState - The current game state object.
 * @param {function} setGameState - The function to update the game state.
 * @returns {boolean}  Returns true if there is a winner, false otherwise.
 */
// export const checkFakeWinner = (gameState) => {
//     if (gameState.winner) return gameState.winner;

//     const XResults = checkCombo(gameState.XLocations);
//     if (XResults) return "X";

//     const OResults = checkCombo(gameState.OLocations);
//     if (OResults) return "O";

//     return false;
// };

/**
 * Checks if the game has ended in a draw and updates the game state
 * accordingly.
 * @param {object} gameState - The current state of the game.
 * @param {function} setGameState - The function to update the game state.
 * @returns {boolean} True if the game has ended in a draw, false otherwise.
 */
// export const checkFakeDraw = (gameState) => {
//     if (gameState.winner || gameState.isDraw) return false;

//     const isBoardFull =
//         gameState.XLocations.length + gameState.OLocations.length === 9;

//     const noWinner = !gameState.winner;

//     if (isBoardFull && noWinner) return true;

//     return false;
// };

// export const miniMax = (gameState, board, isMaximizing) => {
//     // Check if the computer has won
//     if (checkFakeWinner(gameState) == "X") return 100;
//     // Check if the player has won
//     else if (checkFakeWinner(gameState) == "O") return -100;
//     // Check if the game is a draw
//     else if (checkFakeDraw(gameState)) return 0;

//     //If it's the computer's turn (maximizing), find the best move
//     if (isMaximizing) {
//         let bestScore = NEGA_INF;
//         let newBoard = [...board];
//         //Loop through each position on the board
//         newBoard.map((cell, index) => {
//             if (!cell) {
//                 newBoard[index] = "O";
//                 //Call minimax to find the score for the current move
//                 let score = miniMax(newBoard, false);
//                 newBoard[index] = false;
//                 //Update the best move if the current score is better
//                 if (score > bestScore) bestScore = score;
//             }
//         });
//         // Return the best score for the maximizing player
//         return bestScore;
//     } else {
//         let bestScore = POS_INF;
//         let newBoard = [...board];
//         //Loop through each position on the board
//         newBoard.map((cell, index) => {
//             if (!cell) {
//                 newBoard[index] = "X";
//                 //Call minimax to find the score for the current move
//                 let score = miniMax(newBoard, true);
//                 newBoard[index] = false;
//                 //Update the best move if the current score is better
//                 if (score < bestScore) bestScore = score;
//             }
//         });
//         // Return the best score for the maximizing player
//         return bestScore;
//     }
// };

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

export const isAvailable = (board, move) => !board[move];

export const makeMove = (board, move, side) => {
    if (!isWinner(board, side) && !isDraw(board) && !board[move]) {
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
            return side;
        }
    }
    return false;
};

export const isDraw = (board) => {
    return board.every((cell) => cell);
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

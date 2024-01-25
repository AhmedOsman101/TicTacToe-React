export const winningCombos = [
    [0, 1, 2], // Top row
    [3, 4, 5], // Middle row
    [6, 7, 8], // Bottom row
    [0, 3, 6], // Left column
    [1, 4, 7], // Middle column
    [2, 5, 8], // Right column
    [0, 4, 8], // Main diagonal
    [2, 4, 6], // Counter diagonal
];

/**
 * Checks if the given array contains a winning combination.
 * @param {Array} array The array to check for winning combinations.
 * @returns {boolean} True if a winning combination is found, false otherwise.
 */
export const checkCombo = (array) => {
    return winningCombos.some((combo) => {
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
 * Checks if a move is available on a given board.
 * @param {Array} board - The current state of the board.
 * @param {number} move - The move to check availability for.
 * @returns {boolean}  True if the move is available, false otherwise.
 */
export const isAvailable = (board, move) => {
    return !board[move];
};

/**
 * Generates a random move for the AI player in a tic-tac-toe game.
 * @param {object} gameState - The current state of the game.
 * @param {function} setGameState - A function to update the game state.
 */
export const randomAi = (gameState, setGameState) => {
    console.table({ gameEnded: gameState.gameEnded, winner: gameState.winner });
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

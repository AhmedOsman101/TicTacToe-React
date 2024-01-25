import { useEffect } from "react";
import Cell from "./Cell";
import { useGameState } from "../Hooks/useGameState";

const Board = () => {
    const { gameState, setGameState } = useGameState();

    const winningCombos = [
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
     * Checks if the given array contains any winning combinations.
     * @param {{Array}} array The array to check for winning combinations.
     * @returns {{boolean}} True if a winning combination is found, false otherwise.
     */
    const checkCombo = (array) => {
        return winningCombos.some((combo) => {
            return (
                combo.every((item) => array.includes(item)) && combo.length >= 3
            );
        });
    };

    /**
     * Checks if there is a winner in the current game state.
     * @returns {boolean} True if there is a winner, false otherwise.
     */
    const checkWinner = () => {
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
    };

    /**
     * Checks if the game has ended in a draw and updates the game state accordingly.
     * @returns {boolean}  Returns true if the game has ended in a draw, false otherwise.
     */
    const checkDraw = () => {
        if (gameState.winner || gameState.isDraw) return;
        if (
            gameState.XLocations.length + gameState.OLocations.length === 9 &&
            !gameState.winner
        ) {
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
    };

    /**
     * Checks if a specific move on the board is available.
     *
     * @param {Array} board - The game board represented as an array.
     * @param {number} move - The index of the move to check on the board.
     * @returns {boolean}  Returns true if the move is available (board at the specified index is falsy), otherwise false.
     */
    const isAvailable = (board, move) => {
        return !board[move];
    };

    /**
     * Handles the click event on a game board cell.
     * @param {Event} e - The click event object.
     * @param {number} index - The index of the clicked cell.
     */
    const handleClick = (e, index) => {
        if (gameState.gameEnded || !isAvailable(gameState.board, index)) {
            e.preventDefault();
            e.stopPropagation();
            return;
        }
        let newBoard = [...gameState.board];
        newBoard[index] = gameState.XTurn ? "X" : "O";
        gameState.XTurn
            ? gameState.XLocations.push(index)
            : gameState.OLocations.push(index);
        setGameState((prev) => {
            return { ...prev, XTurn: !prev.XTurn, board: newBoard };
        });
    };

    useEffect(() => {
        if (!checkWinner()) checkDraw();
    }, [gameState]);

    return (
        <>
            <div className="board">
                {gameState.board.map((cell, i) => (
                    <Cell
                        key={i}
                        Click={(e) => handleClick(e, i)}
                        item={cell}
                    />
                ))}
            </div>
        </>
    );
};

export default Board;

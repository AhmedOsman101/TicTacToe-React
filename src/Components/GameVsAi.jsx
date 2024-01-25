/* Dependencies */
import { useGameState } from "../Hooks/useGameState";
import { useEffect } from "react";
import {
    randomAi,
    Reset,
    isAvailable,
    checkWinner,
    checkDraw,
} from "./gameLogic";
/* Assets */
import Board from "./Board";
import StatsBar from "./StatsBar";

// Main game component
const GameVsAi = () => {
    // Get the game state and the function to update it from the custom hook
    const { gameState, setGameState } = useGameState();

    /**
     * Handles the click event on a game board cell.
     * @param {Event} e - The click event object.
     * @param {number} index - The index of the clicked cell.
     */
    const handleClick = (e, index) => {
        // If the game has ended or the cell is not available, ignore the click
        if (gameState.gameEnded || !isAvailable(gameState.board, index)) {
            e.preventDefault();
            e.stopPropagation();
            return;
        }
        // If it's X's turn, make a move
        if (gameState.XTurn) {
            let newBoard = [...gameState.board];
            newBoard[index] = "X";
            let newXLocations = [...gameState.XLocations, index];
            // Update the game state
            setGameState((prev) => {
                return {
                    ...prev,
                    XTurn: !prev.XTurn,
                    board: newBoard,
                    XLocations: newXLocations,
                };
            });
        }
    };

    /**
     * Check for a winner and update the game state accordingly. If there is no
     * winner, it checks for a draw. If it is the AI's turn and there is no
     * winner, it calls the randomAi function to make a move.
     */
    useEffect(() => {
        // If there's no winner, check for a draw
        if (!checkWinner(gameState, setGameState)) {
            checkDraw(gameState, setGameState);
            // If it's O's turn and there's no winner, make a move for the AI
            if (!gameState.XTurn && !gameState.winner) {
                // Trigger the AI move after the component re-renders
                setTimeout(() => {
                    randomAi(gameState, setGameState);
                }, 0);
            }
        }
    }, [gameState]);

    // Render the game
    return (
        <>
            <StatsBar />
            <Board handleClick={handleClick} />
            <div className="btn-group" id="SGMBtns">
                <button onClick={() => Reset(setGameState)}>
                    <span className="fa-desktop"></span>
                    <h4>Play Again !</h4>
                </button>
            </div>
        </>
    );
};

export default GameVsAi;

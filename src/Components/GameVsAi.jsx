import Board from "./Board";
import StatsBar from "./StatsBar";
import { useGameState } from "../Hooks/useGameState";
import { useEffect } from "react";
import {
    randomAi,
    resetGame,
    isAvailable,
    checkWinner,
    checkDraw,
} from "./gameLogic";

const GameVsAi = () => {
    const { gameState, setGameState } = useGameState();

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
        if (gameState.XTurn) {
            let newBoard = [...gameState.board];
            newBoard[index] = "X";
            gameState.XLocations.push(index);
            setGameState((prev) => {
                return { ...prev, XTurn: !prev.XTurn, board: newBoard };
            });
        }
    };

    /**
     * check for a winner and update the game state accordingly. If there is no
     * winner, it checks for a draw. If it is the AI's turn and there is no
     * winner, it calls the randomAi function to make a move.
     */
    useEffect(() => {
        if (!checkWinner(gameState, setGameState)) {
            checkDraw(gameState, setGameState);
            if (!gameState.XTurn && !gameState.winner) {
                // Trigger the AI move after the component re-renders
                setTimeout(() => {
                    randomAi(gameState, setGameState);
                }, 0);
            }
        }
    }, [gameState]);

    return (
        <>
            <StatsBar />
            <Board handleClick={handleClick} />
            <div className="btn-group" id="SGMBtns">
                <button onClick={() => resetGame(setGameState)}>
                    <span className="fa-desktop"></span>
                    <h4>Play Again !</h4>
                </button>
            </div>
        </>
    );
};

export default GameVsAi;

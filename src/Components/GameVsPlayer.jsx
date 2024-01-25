/* Dependencies */
import { useEffect } from "react";
import { useGameState } from "../Hooks/useGameState";
import { Reset, isAvailable, checkWinner, checkDraw } from "./gameLogic";
/* Assets */
import Board from "./Board";
import StatsBar from "./StatsBar";
const GameVsPlayer = () => {
    const { gameState, setGameState } = useGameState();
    const handleClick = (e, index) => {
        // If the game has ended or the cell is not available, ignore the click
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
        // Update the game state
        setGameState((prev) => {
            return {
                ...prev,
                XTurn: !prev.XTurn,
                board: newBoard,
            };
        });
    };

    /**
     * Check for a winner and update the game state accordingly. If there is no
     * winner, it checks for a draw. If it is the AI's turn and there is no
     * winner, it calls the randomAi function to make a move.
     */
    useEffect(() => {
        // If there's no winner, check for a draw
        if (!checkWinner(gameState, setGameState))
            checkDraw(gameState, setGameState);
    }, [gameState]);
    return (
        <>
            <StatsBar />
            <Board handleClick={handleClick} />
            <div className="btn-group" id="SGMBtns">
                <button onClick={() => Reset(setGameState)}>
                    <span className="fa-user"></span>
                    <h4>Play Again !</h4>
                </button>
            </div>
        </>
    );
};

export default GameVsPlayer;

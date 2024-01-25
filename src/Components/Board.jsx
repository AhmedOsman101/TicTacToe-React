import { useEffect } from "react";
import Cell from "./Cell";
import { useGameState } from "../Hooks/useGameState";
import { checkWinner, checkDraw } from "./gameLogic"; // Import the game logic functions

const Board = ({ handleClick }) => {
    const { gameState, setGameState } = useGameState();

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

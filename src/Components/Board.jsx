import Cell from "./Cell";
import { useGameState } from "../Hooks/useGameState";

const Board = ({ handleClick }) => {
    const { gameState } = useGameState();

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

import { useGameState } from "../Hooks/useGameState";
import Cell from "./Cell";

const Board = ({ handleClick }) => {
  const { gameState } = useGameState();

  return (
    <>
      <div className="board">
        {gameState.board.map((cell, i) => (
          <Cell Click={e => handleClick(e, i)} item={cell} key={i} />
        ))}
      </div>
    </>
  );
};

export default Board;

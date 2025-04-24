import { useGameState } from "../Hooks/useGameState";
import OElement from "./OElement";
import XElement from "./XElement";

const Cell = ({ item, Click }) => {
  const { gameState } = useGameState();
  return (
    <>
      <div
        className={`cell ${gameState.gameEnded && "disabledCell"}`}
        onClick={Click}
      >
        {item === "X" && <XElement />}
        {item === "O" && <OElement />}
      </div>
    </>
  );
};

export default Cell;

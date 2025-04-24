import { useGameState } from "../Hooks/useGameState";
import OElement from "./OElement";
import XElement from "./XElement";

const DisplayWinner = () => {
  const { gameState } = useGameState();
  return (
    <>
      <h3 id="playerTurn">
        {gameState.isDraw && "It's a draw!"}
        {gameState.winner && "player"}
        {gameState.winner === "X" && <XElement />}
        {gameState.winner === "O" && <OElement />}
        {gameState.winner && "Won!"}
      </h3>
    </>
  );
};

export default DisplayWinner;

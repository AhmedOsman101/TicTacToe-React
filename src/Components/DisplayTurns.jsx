import { useGameState } from "../Hooks/useGameState";
import OElement from "./OElement";
import XElement from "./XElement";

const DisplayTurns = () => {
  const { gameState } = useGameState();
  return (
    <>
      <h3 id="playerTurn">
        Player
        {gameState.XTurn ? <XElement /> : <OElement />} turn
      </h3>
    </>
  );
};

export default DisplayTurns;

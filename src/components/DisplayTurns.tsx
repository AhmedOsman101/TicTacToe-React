import { useAtom } from "jotai";
import { gameStateAtom } from "@/lib/atoms";
import OElement from "./OElement";
import XElement from "./XElement";

function DisplayTurns() {
  const [gameState] = useAtom(gameStateAtom);
  return (
    <h3 id="playerTurn">
      Player
      {gameState.XTurn ? <XElement /> : <OElement />} turn
    </h3>
  );
}

export default DisplayTurns;

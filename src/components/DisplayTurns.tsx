import { useAtom } from "jotai";
import { gameStateAtom } from "@/lib/atoms";
import OIcon from "./icons/OIcon";
import XIcon from "./icons/XIcon";

function DisplayTurns() {
  const [gameState] = useAtom(gameStateAtom);
  return (
    <h3 className="flex" id="playerTurn">
      Player
      {gameState.XTurn ? <XIcon /> : <OIcon />} turn
    </h3>
  );
}

export default DisplayTurns;

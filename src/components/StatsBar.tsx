import { useAtom } from "jotai";
import { gameStateAtom } from "@/lib/atoms";
import DisplayTurns from "./DisplayTurns";
import DisplayWinner from "./DisplayWinner";
import OIcon from "./icons/OIcon";
import XIcon from "./icons/XIcon";

function StatsBar() {
  const [gameState] = useAtom(gameStateAtom);
  return (
    <div className="grid place-items-center gap-3">
      <h1>Tic Tac Toe</h1>
      <h2 className="flex" id="displayScore">
        <XIcon />: {gameState.XScore} - <OIcon />: {gameState.OScore}
      </h2>
      {gameState.gameEnded ? <DisplayWinner /> : <DisplayTurns />}
    </div>
  );
}

export default StatsBar;

import { useAtom } from "jotai";
import { gameStateAtom } from "@/lib/atoms";
import DisplayTurns from "./DisplayTurns";
import DisplayWinner from "./DisplayWinner";
import OElement from "./OElement";
import XElement from "./XElement";

function StatsBar() {
  const [gameState] = useAtom(gameStateAtom);
  return (
    <div className="title">
      <h1>Tic Tac Toe</h1>
      <h2 id="displayScore">
        <XElement />: {gameState.XScore} - <OElement />: {gameState.OScore}
      </h2>
      {gameState.gameEnded ? <DisplayWinner /> : <DisplayTurns />}
    </div>
  );
}

export default StatsBar;

import { useAtom } from "jotai";
import OIcon from "@/components/icons/OIcon";
import XIcon from "@/components/icons/XIcon";
import { gameStateAtom } from "@/lib/atoms";
import DisplayTurns from "./DisplayTurns";
import DisplayWinner from "./DisplayWinner";

function StatsBar() {
  const [gameState] = useAtom(gameStateAtom);
  return (
    <div className="grid place-items-center gap-3">
      <h1 className="font-bold text-2xl">Tic Tac Toe</h1>
      <h2 className="flex">
        <XIcon className="mx-1 w-5" />: {gameState.XScore} -{" "}
        <OIcon className="mx-1 w-6" />: {gameState.OScore}
      </h2>
      {gameState.gameEnded ? <DisplayWinner /> : <DisplayTurns />}
    </div>
  );
}

export default StatsBar;

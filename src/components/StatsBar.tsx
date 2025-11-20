import { useAtom } from "jotai";
import { CircleIcon as OIcon, XIcon } from "lucide-react";
import { gameStateAtom } from "@/lib/atoms";
import DisplayTurns from "./DisplayTurns";

function StatsBar() {
  const [gameState] = useAtom(gameStateAtom);
  return (
    <div className="grid place-items-center gap-3">
      <h1 className="font-bold text-2xl">Tic Tac Toe</h1>
      <h2 className="flex items-center justify-center text-xl">
        <XIcon color="#09c372" size={28} strokeWidth={3} />
        <span>: {gameState.XScore}</span>
        <div className="mx-3 h-0.5 w-3 bg-white" />
        <OIcon className="mr-1" color="#498afb" size={24} strokeWidth={3} />
        <span>: {gameState.OScore}</span>
      </h2>
      <DisplayTurns />
    </div>
  );
}

export default StatsBar;

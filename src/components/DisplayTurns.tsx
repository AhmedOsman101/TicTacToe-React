import { useAtom } from "jotai";
import { CircleIcon as OIcon, XIcon } from "lucide-react";
import { gameStateAtom } from "@/lib/atoms";

function DisplayTurns() {
  const [gameState] = useAtom(gameStateAtom);

  if (gameState.isDraw) {
    return <h3>It's a draw!</h3>;
  }

  if (gameState.winner) {
    return (
      <h3 className="flex items-center text-lg">
        <span>Player </span>
        {gameState.winner === "X" ? (
          <XIcon color="#09c372" size={28} strokeWidth={3} />
        ) : (
          <OIcon className="mx-1" color="#498afb" size={24} strokeWidth={3} />
        )}
        <span> Won!</span>
      </h3>
    );
  }

  return (
    <h3 className="flex items-center text-lg">
      <span>Player </span>
      {gameState.XTurn ? (
        <XIcon color="#09c372" size={28} strokeWidth={3} />
      ) : (
        <OIcon className="mx-1" color="#498afb" size={24} strokeWidth={3} />
      )}
      <span> turn</span>
    </h3>
  );
}

export default DisplayTurns;

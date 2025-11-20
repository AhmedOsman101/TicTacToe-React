import { useAtom } from "jotai";
import OIcon from "@/components/icons/OIcon";
import XIcon from "@/components/icons/XIcon";
import { gameStateAtom } from "@/lib/atoms";

function DisplayTurns() {
  const [gameState] = useAtom(gameStateAtom);
  return (
    <h3 className="flex">
      Player
      {gameState.XTurn ? (
        <XIcon className="mx-1.5 w-5" />
      ) : (
        <OIcon className="mx-1.5 w-6" />
      )}{" "}
      turn
    </h3>
  );
}

export default DisplayTurns;

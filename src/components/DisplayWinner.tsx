import { useAtom } from "jotai";
import { gameStateAtom } from "@/lib/atoms";
import OIcon from "./icons/OIcon";
import XIcon from "./icons/XIcon";

const DisplayWinner = () => {
  const [gameState] = useAtom(gameStateAtom);

  if (gameState.isDraw) {
    return <h3 id="playerTurn">It's a draw!</h3>;
  }

  if (gameState.winner) {
    return (
      <h3 className="flex" id="playerTurn">
        Player {gameState.winner === "X" ? <XIcon /> : <OIcon />} Won!
      </h3>
    );
  }

  return <>ballz</>;
};

export default DisplayWinner;

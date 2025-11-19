import { useAtom } from "jotai";
import { gameStateAtom } from "@/lib/atoms";
import OElement from "./OElement";
import XElement from "./XElement";

const DisplayWinner = () => {
  const [gameState] = useAtom(gameStateAtom);

  if (gameState.isDraw) {
    return <h3 id="playerTurn">It's a draw!</h3>;
  }

  if (gameState.winner) {
    return (
      <h3 id="playerTurn">
        Player {gameState.winner === "X" ? <XElement /> : <OElement />} Won!
      </h3>
    );
  }

  return <>ballz</>;
};

export default DisplayWinner;

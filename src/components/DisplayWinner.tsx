import { useAtom } from "jotai";
import OIcon from "@/components/icons/OIcon";
import XIcon from "@/components/icons/XIcon";
import { gameStateAtom } from "@/lib/atoms";

const DisplayWinner = () => {
  const [gameState] = useAtom(gameStateAtom);

  if (gameState.isDraw) {
    return <h3>It's a draw!</h3>;
  }

  if (gameState.winner) {
    return (
      <h3 className="flex">
        Player{" "}
        {gameState.winner === "X" ? (
          <XIcon className="mx-1.5 w-5" />
        ) : (
          <OIcon className="mx-1.5 w-6" />
        )}{" "}
        Won!
      </h3>
    );
  }

  return <>ballz</>;
};

export default DisplayWinner;

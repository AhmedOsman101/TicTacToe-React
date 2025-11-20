import { useAtom } from "jotai";
import { gameStateAtom } from "@/lib/atoms";
import Cell from "./Cell";

type Props = {
  clickAction: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    index: number
  ) => void;
};

const Board = ({ clickAction }: Props) => {
  const [gameState] = useAtom(gameStateAtom);

  return (
    <div className="grid w-lg grid-cols-3 items-center justify-center rounded-xl border">
      {gameState.board.map((cell, i) => (
        <Cell
          clickAction={e => clickAction(e, i)}
          item={cell}
          key={`${i}-${cell}`}
        />
      ))}
    </div>
  );
};

export default Board;

import { useAtom } from "jotai";
import { gameStateAtom } from "@/lib/atoms";
import Cell from "./Cell";

type Props = {
  clickAction: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => void;
};

const Board = ({ clickAction }: Props) => {
  const [gameState] = useAtom(gameStateAtom);

  return (
    <div className="board">
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

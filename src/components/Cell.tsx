import { useAtom } from "jotai";
import OIcon from "@/components/icons/OIcon";
import XIcon from "@/components/icons/XIcon";
import { gameStateAtom } from "@/lib/atoms";
import type { Player } from "@/lib/types";

type Props = {
  item: Player;
  clickAction: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    index: number
  ) => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

function Cell({ item, clickAction, ...rest }: Props) {
  const [gameState] = useAtom(gameStateAtom);
  return (
    <button
      className={`cell grid aspect-square cursor-crosshair not-empty:cursor-not-allowed place-items-center border-r border-b ${gameState.gameEnded && "cursor-not-allowed"}`}
      onClick={clickAction as React.MouseEventHandler<HTMLButtonElement>}
      {...rest}
    >
      {item === "X" && <XIcon />}
      {item === "O" && <OIcon />}
    </button>
  );
}

export default Cell;

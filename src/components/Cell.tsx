import { useAtom } from "jotai";
import { CircleIcon as OIcon, XIcon } from "lucide-react";
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
      {item === "X" && <XIcon className="size-20" color="#09c372" />}
      {item === "O" && (
        <OIcon className="size-14" color="#498afb" strokeWidth={3} />
      )}
    </button>
  );
}

export default Cell;

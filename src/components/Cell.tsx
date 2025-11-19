import { useAtom } from "jotai";
import { gameStateAtom } from "@/lib/atoms";
import type { Player } from "@/lib/types";
import OElement from "./OElement";
import XElement from "./XElement";

type Props = {
  item: Player;
  clickAction: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => void;
};

function Cell({ item, clickAction }: Props) {
  const [gameState] = useAtom(gameStateAtom);
  return (
    // biome-ignore lint/a11y/useFocusableInteractive: for now
    // biome-ignore lint/a11y/useKeyWithClickEvents: for now
    // biome-ignore lint/a11y/useSemanticElements: for now
    <div
      className={`cell not-empty:cursor-not-allowed ${gameState.gameEnded && "cursor-not-allowed"}`}
      onClick={clickAction as React.MouseEventHandler<HTMLDivElement>}
      role="button"
    >
      {item === "X" && <XElement />}
      {item === "O" && <OElement />}
    </div>
  );
}

export default Cell;

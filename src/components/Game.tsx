import { useAtom } from "jotai";
import { MonitorIcon as DesktopIcon, UserIcon } from "lucide-react";
import { useEffect } from "react";
import { useGameActions } from "@/hooks/use-game-actions";
import { gameStateAtom } from "@/lib/atoms";
import {
  isDraw,
  isWinner,
  makeMove,
  miniMaxMove,
  randomMove,
} from "@/lib/gameLogic";
import BackToMenu from "./BackToMenu";
import Board from "./Board";
import StatsBar from "./StatsBar";

type Props = {
  variant: "minimax" | "random" | "player";
};

function Game({ variant }: Props) {
  const [gameState] = useAtom(gameStateAtom);
  const actions = useGameActions();

  function handleClick(e: React.MouseEvent, index: number) {
    e.preventDefault();

    const side = gameState.XTurn ? "X" : "O";
    if (gameState.gameEnded) return;

    if (side === "X" || variant === "player") {
      const newBoard = makeMove([...gameState.board], index, side);
      if (newBoard) {
        actions.makeMove(newBoard);
      }
    }
  }

  useEffect(() => {
    const winner = isWinner(gameState.board, "X")
      ? "X"
      : isWinner(gameState.board, "O")
        ? "O"
        : false;

    // If it's a game vs ai and the game hasn't ended, make the AI's move
    if (variant !== "player" && !winner) {
      if (!gameState.XTurn && !gameState.gameEnded) {
        setTimeout(() => {
          const newBoard =
            variant === "random"
              ? randomMove([...gameState.board])
              : miniMaxMove([...gameState.board]);
          if (newBoard && newBoard.toString() !== gameState.board.toString()) {
            actions.makeMove(newBoard);
          }
        }, 500);
      }
    }

    // Check for a winner or draw
    if (winner && winner !== gameState.winner) {
      actions.endGame(winner);
      winner === "X" ? actions.updateScores(1, 0) : actions.updateScores(0, 1);
    } else if (isDraw(gameState.board) && !gameState.isDraw) {
      actions.draw();
      actions.updateScores(0.5, 0.5);
    }
  }, [
    gameState,
    actions.updateScores,
    actions.draw,
    actions.endGame,
    actions.makeMove,
    variant,
  ]);

  return (
    <>
      <StatsBar />
      <Board clickAction={handleClick} />
      <div className="inGame flex gap-4">
        <button
          className="button flex w-max items-center"
          onClick={actions.resetGame}
          type="button"
        >
          {variant === "player" ? (
            <UserIcon className="mr-2 size-7" />
          ) : (
            <DesktopIcon className="mr-2 size-7 pt-1" />
          )}
          <p>Play Again!</p>
        </button>
        <BackToMenu />
      </div>
    </>
  );
}

export default Game;

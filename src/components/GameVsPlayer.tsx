import { useAtom } from "jotai";
import { useEffect } from "react";
import UserIcon from "@/components/icons/UserIcon";
import { useGameActions } from "@/hooks/use-game-actions";
import { gameStateAtom } from "@/lib/atoms";
import { isDraw, isWinner, makeMove } from "@/lib/gameLogic";
import BackToMenu from "./BackToMenu";
import Board from "./Board";
import StatsBar from "./StatsBar";

function GameVsPlayer() {
  const [gameState] = useAtom(gameStateAtom);
  const actions = useGameActions();

  function handleClick(e: React.MouseEvent, index: number) {
    e.preventDefault();

    const side = gameState.XTurn ? "X" : "O";
    if (gameState.gameEnded) return;

    const newBoard = makeMove([...gameState.board], index, side);
    if (newBoard) {
      actions.makeMove(newBoard);
    }
  }

  useEffect(() => {
    // Check for a winner or draw
    const winner = isWinner(gameState.board, "X")
      ? "X"
      : isWinner(gameState.board, "O")
        ? "O"
        : false;
    if (winner && winner !== gameState.winner) {
      actions.endGame(winner);
      winner === "X" ? actions.updateScores(1, 0) : actions.updateScores(0, 1);
    } else if (isDraw(gameState.board) && !gameState.isDraw) {
      actions.draw();
      actions.updateScores(0.5, 0.5);
    }
  }, [gameState, actions.updateScores, actions.draw, actions.endGame]);

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
          <UserIcon />
          <h4>Play Again!</h4>
        </button>
        <BackToMenu />
      </div>
    </>
  );
}

export default GameVsPlayer;

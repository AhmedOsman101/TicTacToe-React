import { useAtom } from "jotai";
import { useEffect } from "react";
import { useGameActions } from "@/hooks/use-game-actions";
import { gameStateAtom } from "@/lib/atoms";
import { isDraw, isWinner, makeMove, randomAi } from "@/lib/gameLogic";
import BackToMenu from "./BackToMenu";
import Board from "./Board";
import DesktopIcon from "./icons/DesktopIcon";
import StatsBar from "./StatsBar";

// Main game component
function GameVsAi() {
  const [gameState] = useAtom(gameStateAtom);
  const actions = useGameActions();

  function handleClick(e: React.MouseEvent, index: number) {
    e.preventDefault();
    if (gameState.gameEnded) return;

    if (gameState.XTurn) {
      const newBoard = makeMove([...gameState.board], index, "X");
      if (newBoard) actions.makeMove(newBoard);
    }
  }

  useEffect(() => {
    // If it's not X's turn and the game hasn't ended, make the AI's move
    if (
      !gameState.XTurn &&
      !gameState.gameEnded &&
      !isWinner(gameState.board, "X")
    ) {
      setTimeout(() => {
        const newBoard = randomAi([...gameState.board]);
        if (newBoard && newBoard.toString() !== gameState.board.toString()) {
          actions.makeMove(newBoard);
        }
      }, 500);
    }

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
  }, [
    gameState,
    actions.updateScores,
    actions.draw,
    actions.endGame,
    actions.makeMove,
  ]);

  // Render the game
  return (
    <>
      <StatsBar />
      <Board clickAction={handleClick} />
      <div className="btn-group inGame gap-4" id="SGMBtns">
        <button className="button" onClick={actions.resetGame} type="button">
          <DesktopIcon />
          <h4>Play Again !</h4>
        </button>
        <BackToMenu />
      </div>
    </>
  );
}

export default GameVsAi;

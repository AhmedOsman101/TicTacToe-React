import { useContext, useEffect } from "react";
import { GameStateContext } from "../Context/GameStateContext.jsx";
import { isDraw, isWinner, playerMove } from "../lib/gameLogic.js";
import BackToMenu from "./BackToMenu.jsx";
import Board from "./Board.jsx";
import StatsBar from "./StatsBar.jsx";

const GameVsPlayer = () => {
  const { gameState, dispatch } = useContext(GameStateContext);

  const handleClick = (e, index) => {
    e.preventDefault();
    const side = gameState.XTurn ? "X" : "O";
    if (gameState.gameEnded) {
      return;
    }
    const newBoard = playerMove(gameState.board, index, side);
    if (newBoard) {
      dispatch({ type: "MAKE_MOVE", newBoard: newBoard });
    }
  };

  useEffect(() => {
    // If it's not X's turn and the game hasn't ended, make the AI's move
    // Check for a winner or draw
    const winner = isWinner(gameState.board, "X")
      ? "X"
      : isWinner(gameState.board, "O")
        ? "O"
        : false;
    if (winner && winner !== gameState.winner) {
      dispatch({ type: "END_GAME", winner: winner });
      if (winner === "X") {
        dispatch({
          type: "UPDATE_SCORES",
          XScore: 1,
          OScore: 0,
        });
      } else {
        dispatch({
          type: "UPDATE_SCORES",
          XScore: 0,
          OScore: 1,
        });
      }
    } else if (isDraw(gameState.board) && !gameState.isDraw) {
      dispatch({ type: "DRAW" });
      dispatch({
        type: "UPDATE_SCORES",
        XScore: 0.5,
        OScore: 0.5,
      });
    }
    console.table(gameState);
  }, [
    gameState.board,
    gameState.XTurn,
    gameState.gameEnded,
    gameState.winner,
    gameState.isDraw,
  ]);

  return (
    <>
      <StatsBar />
      <Board handleClick={handleClick} />
      <div className="btn-group inGame" id="SGMBtns">
        <button type="button" onClick={() => dispatch({ type: "RESET_GAME" })}>
          <span className="fa-user" />
          <h4>Play Again !</h4>
        </button>
        <BackToMenu />
      </div>
    </>
  );
};

export default GameVsPlayer;

import { useAtom } from "jotai";
import { gameStateAtom, initialState } from "@/lib/atoms";
import type { GameState, Player } from "@/lib/types";

function cloneState(state: GameState): GameState {
  return {
    ...state,
    board: [...state.board],
    XLocations: [...state.XLocations],
    OLocations: [...state.OLocations],
  };
}

function useGameActions() {
  const [, setGameState] = useAtom(gameStateAtom);
  /**
   * Updates the game state by applying a new board and toggling the current player's turn.
   * @param newBoard The updated array representing the Tic-Tac-Toe board state.
   */
  function makeMove(newBoard: Player[]) {
    setGameState(state => {
      state.board = [...newBoard];
      state.XTurn = !state.XTurn;
    });
  }

  /**
   * Ends the game and sets the winner.
   * @param winner The player ('X' or 'O') who won the game.
   */
  function endGame(winner: Player) {
    setGameState(state => {
      state.gameEnded = true;
      state.winner = winner;
    });
  }

  /**
   * Ends the game and marks it as a draw.
   */
  function draw() {
    setGameState(state => {
      state.gameEnded = true;
      state.isDraw = true;
    });
  }

  /**
   * Resets the entire game state back to its initial value (typically to go back to a main menu or setup screen).
   */
  function backToMenu(): void {
    console.dir(initialState);
    setGameState(() => cloneState(initialState));
  }

  /**
   * Resets the current game round while preserving the score of previous rounds.
   */
  function resetGame() {
    console.dir(initialState);
    setGameState(state => {
      const XScore = state.XScore;
      const OScore = state.OScore;

      Object.assign(state, cloneState(initialState)); // resets everything
      state.XScore = XScore;
      state.OScore = OScore;
    });
  }

  /**
   * Increments the scores for 'X' and 'O' based on the provided values.
   * @param x The amount to add to the X score.
   * @param o The amount to add to the O score.
   */
  function updateScores(x: number, o: number) {
    setGameState(state => {
      state.XScore += x;
      state.OScore += o;
    });
  }

  return {
    makeMove,
    endGame,
    draw,
    backToMenu,
    resetGame,
    updateScores,
  };
}

export { useGameActions };

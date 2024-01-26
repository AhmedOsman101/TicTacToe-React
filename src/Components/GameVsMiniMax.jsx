import { useContext, useEffect } from "react"; // Import useEffect
import { GameStateContext } from "../Context/GameStateContext";
import { playerMove, AIMove, isWinner, isDraw } from "./gameLogic";
import Board from "./Board";
import BackToMenu from "./BackToMenu";
import StatsBar from "./StatsBar";

const GameVsMiniMax = () => {
    const { gameState, dispatch } = useContext(GameStateContext);

    const handleClick = (e, index) => {
        e.preventDefault();
        if (gameState.gameEnded) return;

        if (gameState.XTurn) {
            let newBoard = playerMove(gameState.board, index);
            if (newBoard) {
                dispatch({ type: "MAKE_MOVE", newBoard: newBoard });
            }
        }
    };

    useEffect(() => {
        // If it's not X's turn and the game hasn't ended, make the AI's move
        if (!gameState.XTurn && !gameState.gameEnded) {
            setTimeout(() => {
                let newBoard = AIMove(gameState.board);
                if (
                    newBoard &&
                    newBoard.toString() !== gameState.board.toString()
                ) {
                    dispatch({ type: "MAKE_MOVE", newBoard: newBoard });
                }
            }, 500);
        }

        // Check for a winner or draw
        const winner = isWinner(gameState.board, "X")
            ? "X"
            : isWinner(gameState.board, "O")
            ? "O"
            : false;
        const draw = isDraw(gameState.board);
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
        } else if (draw && !gameState.isDraw) {
            dispatch({ type: "DRAW" });
            dispatch({
                type: "UPDATE_SCORES",
                XScore: 0.5,
                OScore: 0.5,
            });
        }
        console.table(gameState);
    }, [gameState]);

    return (
        <>
            <StatsBar />
            <Board handleClick={handleClick} />
            <div className="btn-group" id="SGMBtns">
                <button onClick={() => dispatch({ type: "RESET_GAME" })}>
                    <span className="fa-desktop"></span>
                    <h4>Play Again !</h4>
                </button>
                <BackToMenu />
            </div>
        </>
    );
};

export default GameVsMiniMax;

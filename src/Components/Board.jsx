import { useEffect } from "react";
import Cell from "./Cell";
import { useGameState } from "../Hooks/useGameState";

const Board = () => {
    const { gameState, setGameState } = useGameState();

    const winningCombos = [
        [0, 1, 2], // Top row
        [3, 4, 5], // Middle row
        [6, 7, 8], // Bottom row
        [0, 3, 6], // Left column
        [1, 4, 7], // Middle column
        [2, 5, 8], // Right column
        [0, 4, 8], // Main diagonal
        [2, 4, 6], // Counter diagonal
    ];
    const checkCombo = (array) => {
        return winningCombos.some((combo) => {
            return (
                combo.every((item) => array.includes(item)) && combo.length >= 3
            );
        });
    };

    const checkWinner = () => {
        if (gameState.winner) return true;

        const XResults = checkCombo(gameState.XLocations);

        if (XResults) {
            setGameState((prev) => {
                return {
                    ...prev,
                    XScore: prev.XScore + 1,
                    winner: "X",
                    gameEnded: true,
                };
            });
            return true;
        }

        const OResults = checkCombo(gameState.OLocations);

        if (OResults) {
            setGameState((prev) => {
                return {
                    ...prev,
                    OScore: prev.OScore + 1,
                    winner: "O",
                    gameEnded: true,
                };
            });
            return true;
        }
    };

    const checkDraw = () => {
        if (gameState.winner || gameState.isDraw) return;
        if (
            gameState.XLocations.length + gameState.OLocations.length === 9 &&
            !gameState.winner
        ) {
            setGameState((prev) => {
                return {
                    ...prev,
                    OScore: prev.OScore + 0.5,
                    XScore: prev.XScore + 0.5,
                    isDraw: true,
                    gameEnded: true,
                };
            });
            return true;
        }
    };

    const handleClick = (e, index) => {
        if (gameState.gameEnded || gameState.board[index]) {
            e.preventDefault();
            e.stopPropagation();
            return;
        }
        let newBoard = [...gameState.board];
        newBoard[index] = gameState.XTurn ? "X" : "O";
        gameState.XTurn
            ? gameState.XLocations.push(index)
            : gameState.OLocations.push(index);
        setGameState((prev) => {
            return { ...prev, XTurn: !prev.XTurn, board: newBoard };
        });
    };

    useEffect(() => {
        if (!checkWinner()) checkDraw();
    }, [gameState]);

    return (
        <>
            <div className="board">
                {gameState.board.map((cell, i) => (
                    <Cell
                        key={i}
                        Click={(e) => handleClick(e, i)}
                        item={cell}
                    />
                ))}
            </div>
        </>
    );
};

export default Board;

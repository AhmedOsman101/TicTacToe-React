import { useEffect, useState } from "react";
import Cell from "./Cell";
import { useGameState } from "../Hooks/useGameState";

const Board = () => {
    const [board, setBoard] = useState(Array(9).fill(false));
    const [XLocations] = useState([]);
    const [OLocations] = useState([]);
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

    const checkWinner = () => {
        console.log(XLocations);
        console.log(OLocations);
        if (gameState.winner) return;

        const XResults = winningCombos.map((combo) => {
            return (
                XLocations.every((location) => combo.includes(location)) &&
                XLocations.length === combo.length
            );
        });

        if (XResults.includes(true)) {
            setGameState((prev) => {
                return {
                    ...prev,
                    XScore: prev.XScore + 1,
                    winner: "X",
                    gameEnded: true,
                };
            });
        }

        const OResults = winningCombos.map((combo) => {
            return (
                OLocations.every((location) => combo.includes(location)) &&
                OLocations.length === combo.length
            );
        });

        if (OResults.includes(true)) {
            setGameState((prev) => {
                return {
                    ...prev,
                    OScore: prev.OScore + 1,
                    winner: "O",
                    gameEnded: true,
                };
            });
        }
    };

    const checkDraw = () => {
        if (gameState.winner || gameState.isDraw) return;
        if (XLocations.length + OLocations.length === 9 && !gameState.winner) {
            setGameState((prev) => {
                return {
                    ...prev,
                    OScore: prev.OScore + 0.5,
                    XScore: prev.XScore + 0.5,
                    isDraw: true,
                    gameEnded: true,
                };
            });
        }
    };

    const handleClick = (e, index) => {
        if (gameState.gameEnded || board[index]) {
            e.preventDefault();
            e.stopPropagation();
            return;
        }
        let newBoard = [...board];
        newBoard[index] = gameState.XTurn ? "X" : "O";
        setBoard(newBoard);
        gameState.XTurn ? XLocations.push(index) : OLocations.push(index);
        setGameState((prev) => {
            return { ...prev, XTurn: !prev.XTurn };
        });
    };

    useEffect(() => {
        checkWinner();
        checkDraw();
    }, [board]);

    return (
        <>
            <div className="board">
                {board.map((cell, i) => (
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

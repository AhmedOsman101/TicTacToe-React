import { useEffect, useState } from "react";
import Cell from "./Cell";

const Board = () => {
    const [board, setBoard] = useState(Array(9).fill(false));
    const [XTurn, setTurn] = useState(true);
    const [XLocations, setXLocations] = useState([]);
    const [OLocations, setOLocations] = useState([]);

    const winningCombos = [
        // Horizontal
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        // Vertical
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        // Diagonal
        [0, 4, 8],
        [2, 4, 6],
    ];

    const checkWinner = () => {
        const XResults = winningCombos.map((combo) => {
            return (
                XLocations.every((location) => combo.includes(location)) &&
                XLocations.length === combo.length
            );
        });
        const OResults = winningCombos.map((combo) => {
            return (
                OLocations.every((location) => combo.includes(location)) &&
                OLocations.length === combo.length
            );
        });
        if (XResults.includes(true)) return "X";
        if (OResults.includes(true)) return "O";
        return false;
    };

    const checkDraw = () => {
        if (XLocations.length + OLocations.length === 9) {
            return true;
        }
    };

    const handleClick = (index) => {
        if (checkWinner()) return;
        if (checkDraw()) return;
        if (board[index]) return;
        let newBoard = [...board];
        newBoard[index] = XTurn ? "X" : "O";
        XTurn ? XLocations.push(index) : OLocations.push(index);
        setBoard(newBoard);
        setTurn((prev) => !prev);
    };

    useEffect(() => {}, [board]);
    return (
        <>
            <div className="board">
                {board.map((cell, i) => (
                    <Cell key={i} Click={() => handleClick(i)} item={cell} />
                ))}
            </div>
        </>
    );
};

export default Board;

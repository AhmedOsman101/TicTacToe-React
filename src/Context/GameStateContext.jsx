import React, { createContext, useState } from "react";

export const GameStateContext = createContext(null);

export const GameStateContextProvider = ({ children }) => {
    const [gameState, setGameState] = useState({
        XScore: 0,
        OScore: 0,
        XTurn: true,
        winner: false,
        isDraw: false,
        gameEnded: false,
    });

    return (
        <GameStateContext.Provider value={{ gameState, setGameState }}>
            {children}
        </GameStateContext.Provider>
    );
};

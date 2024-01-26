import { createContext, useReducer } from "react";

export const GameStateContext = createContext(null);

const initialState = {
    XScore: 0,
    OScore: 0,
    XTurn: true,
    XLocations: [],
    OLocations: [],
    winner: false,
    isDraw: false,
    gameEnded: false,
    board: Array(9).fill(false),
};

function gameReducer(state, action) {
    switch (action.type) {
        case "MAKE_MOVE":
            return { ...state, board: action.newBoard, XTurn: !state.XTurn };
        case "END_GAME":
            return { ...state, gameEnded: true, winner: action.winner };
        case "DRAW":
            return { ...state, isDraw: true, gameEnded: true };
        case "BACK_TO_MENU":
            return { ...initialState };
        case "RESET_GAME":
            return {
                ...state,
                XTurn: true,
                XLocations: [],
                OLocations: [],
                winner: false,
                isDraw: false,
                gameEnded: false,
                board: Array(9).fill(false),
            };
        case "UPDATE_SCORES":
            return {
                ...state,
                XScore: state.XScore + action.XScore,
                OScore: state.OScore + action.OScore,
            };
        default:
            throw new Error();
    }
}

export const GameStateContextProvider = ({ children }) => {
    const [gameState, dispatch] = useReducer(gameReducer, initialState);

    return (
        <GameStateContext.Provider value={{ gameState, dispatch }}>
            {children}
        </GameStateContext.Provider>
    );
};

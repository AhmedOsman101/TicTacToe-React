import { createContext } from "react";

const ScoreContext = createContext({ x: 0, y: 0 });

const ScoredContextProvider = ({ children }) => {

    return (
        <ScoreContext.Provider value={true}>
            {children}
        </ScoreContext.Provider>
    );
};

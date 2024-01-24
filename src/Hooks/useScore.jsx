import { useContext } from "react";

export const useScore = () => {
    const context = useContext(ScoreContext);

    if (!context) {
        throw new Error(
            "useSharedState must be used within a SharedStateProvider",
        );
    }

    return context;
};

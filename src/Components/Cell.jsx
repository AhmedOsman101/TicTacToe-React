import XElement from "./XElement";
import OElement from "./OElement";
import { useGameState } from "../Hooks/useGameState";

const Cell = ({ item, Click }) => {
    const { gameState } = useGameState();
    return (
        <>
            <div
                className={`cell ${gameState.gameEnded && "disabledCell"}`}
                onClick={Click}>
                {item === "X" && <XElement />}
                {item === "O" && <OElement />}
            </div>
        </>
    );
};

export default Cell;

import { useGameState } from "../Hooks/useGameState";
import XElement from "./XElement";
import OElement from "./OElement";

const DisplayTurns = () => {
    const { gameState } = useGameState();
    return (
        <>
            <h3 id="playerTurn">
                Player
                {gameState.XTurn ? <XElement /> : <OElement />} turn
            </h3>
        </>
    );
};

export default DisplayTurns;

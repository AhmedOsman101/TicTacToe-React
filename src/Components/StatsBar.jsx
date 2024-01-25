import { useGameState } from "../Hooks/useGameState";
import DisplayTurns from "./DisplayTurns";
import DisplayWinner from "./DisplayWinner";
import OElement from "./OElement";
import XElement from "./XElement";

const StatsBar = () => {
    const { gameState } = useGameState();

    return (
        <div className="title">
            <h1>Tic Tac Toe</h1>
            <h2 id="displayScore">
                {<XElement />}: {gameState.XScore} - {<OElement />}:{" "}
                {gameState.OScore}
            </h2>
            {gameState.gameEnded ? <DisplayWinner /> : <DisplayTurns />}
        </div>
    );
};

export default StatsBar;

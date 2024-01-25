import Board from "./Board";
import StatsBar from "./StatsBar";
import { useGameState } from "../Hooks/useGameState";
const Game = () => {
    const { setGameState } = useGameState();
    const handleClick = () => {
        setGameState((prev) => {
            return {
                ...prev,
                XTurn: true,
                XLocations: [],
                OLocations: [],
                winner: false,
                isDraw: false,
                gameEnded: false,
                board: Array(9).fill(false),
            };
        });
    };
    return (
        <>
            <StatsBar />
            <Board />
            <div className="btn-group" id="SGMBtns">
                <button onClick={handleClick}>
                    <span className="fa-desktop"></span>
                    <h4>Play Again !</h4>
                </button>
            </div>
        </>
    );
};

export default Game;

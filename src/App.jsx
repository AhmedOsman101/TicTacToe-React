import "./App.css";
import Board from "./Components/Board";
import StatsBar from "./Components/StatsBar";
import { GameStateContextProvider } from "./Context/GameStateContext";

function App() {
    return (
        <>
            <div className="container">
                <GameStateContextProvider>
                    <StatsBar />
                    <Board />
                </GameStateContextProvider>
            </div>
        </>
    );
}

export default App;

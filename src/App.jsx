import "./App.css";
import GameVsPlayer from "./Components/GameVsPlayer";
import GameVsAi from "./Components/GameVsAi";
import MainMenu from "./Components/MainMenu";
import { Routes, Route } from "react-router-dom";
import { GameStateContextProvider } from "./Context/GameStateContext";
import GameVsMiniMax from "./Components/GameVsMiniMax";
import ChooseDifficulty from "./Components/ChooseDifficulty ";
function App() {
    return (
        <>
            <GameStateContextProvider>
                <div className="container">
                    <Routes>
                        <Route
                            path="/TicTacToe-React/GameVsPlayer/"
                            element={<GameVsPlayer />}
                        />
                        <Route
                            path="/TicTacToe-React/GameVsAi/"
                            element={<ChooseDifficulty />}
                        />
                        <Route
                            path="/TicTacToe-React/GameVsAi/Beginner"
                            element={<GameVsAi />}
                        />
                        <Route
                            path="/TicTacToe-React/GameVsAi/Advanced"
                            element={<GameVsMiniMax />}
                        />
                        <Route
                            path="/TicTacToe-React/"
                            element={<MainMenu />}
                        />
                    </Routes>
                </div>
            </GameStateContextProvider>
        </>
    );
}

export default App;

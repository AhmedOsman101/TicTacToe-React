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
                            path="/GameVsPlayer/"
                            element={<GameVsPlayer />}
                        />
                        <Route
                            path="/GameVsAi/"
                            element={<ChooseDifficulty />}
                        />
                        <Route
                            path="/GameVsAi/Beginner"
                            element={<GameVsAi />}
                        />
                        <Route
                            path="/GameVsAi/Advanced"
                            element={<GameVsMiniMax />}
                        />
                        <Route path="/" element={<MainMenu />} />
                    </Routes>
                </div>
            </GameStateContextProvider>
        </>
    );
}

export default App;

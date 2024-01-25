import "./App.css";
import Game from "./Components/GameVsPlayer";
import MainMenu from "./Components/MainMenu";
import { Routes, Route } from "react-router-dom";
import { GameStateContextProvider } from "./Context/GameStateContext";
function App() {
    return (
        <>
            {" "}
            <GameStateContextProvider>
                <div className="container">
                    <Routes>
                        <Route path="/GameVsPlayer/" element={<Game />} />
                        <Route path="/" element={<MainMenu />} />
                    </Routes>
                </div>
            </GameStateContextProvider>
        </>
    );
}

export default App;

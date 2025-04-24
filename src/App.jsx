import "./App.css";
import { Route, Routes } from "react-router-dom";
import ChooseDifficulty from "./Components/ChooseDifficulty ";
import GameVsAi from "./Components/GameVsAi";
import GameVsMiniMax from "./Components/GameVsMiniMax";
import GameVsPlayer from "./Components/GameVsPlayer";
import MainMenu from "./Components/MainMenu";
import { GameStateContextProvider } from "./Context/GameStateContext";

function App() {
  return (
    <>
      <GameStateContextProvider>
        <div className="container">
          <Routes>
            <Route element={<GameVsPlayer />} path="/GameVsPlayer/" />
            <Route element={<ChooseDifficulty />} path="/GameVsAi/" />
            <Route element={<GameVsAi />} path="/GameVsAi/Beginner" />
            <Route element={<GameVsMiniMax />} path="/GameVsAi/Advanced" />
            <Route element={<MainMenu />} path="/" />
          </Routes>
        </div>
      </GameStateContextProvider>
    </>
  );
}

export default App;

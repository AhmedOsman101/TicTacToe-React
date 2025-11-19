import { Route, Routes } from "react-router";
import ChooseDifficulty from "./components/ChooseDifficulty";
import GameVsAi from "./components/GameVsAi";
import GameVsMiniMax from "./components/GameVsMiniMax";
import GameVsPlayer from "./components/GameVsPlayer";
import MainMenu from "./components/MainMenu";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route Component={GameVsPlayer} path="/GameVsPlayer/" />
        <Route Component={ChooseDifficulty} path="/GameVsAi/" />
        <Route Component={GameVsAi} path="/GameVsAi/Beginner" />
        <Route Component={GameVsMiniMax} path="/GameVsAi/Advanced" />
        <Route Component={MainMenu} path="/" />
      </Routes>
    </div>
  );
}

export default App;

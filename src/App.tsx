import { Route, Routes } from "react-router";
import ChooseDifficulty from "@/components/ChooseDifficulty";
import Game from "@/components/Game";
import MainMenu from "@/components/MainMenu";

function App() {
  return (
    <div className="flex flex-col items-center gap-5">
      <Routes>
        <Route Component={MainMenu} index />
        <Route element={<Game variant="player" />} path="pvp" />
        <Route path="/ai">
          <Route Component={ChooseDifficulty} index />
          <Route element={<Game variant="random" />} path="beginner" />
          <Route element={<Game variant="minimax" />} path="advanced" />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

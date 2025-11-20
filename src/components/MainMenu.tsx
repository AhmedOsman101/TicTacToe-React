import { useNavigate } from "react-router";
import DesktopIcon from "./icons/DesktopIcon";
import ShuffleIcon from "./icons/ShuffleIcon";
import UserIcon from "./icons/UserIcon";

function MainMenu() {
  const navigate = useNavigate();
  function decideGameMode() {
    return Math.floor(Math.random() * 2) === 1
      ? navigate("/GameVsAi")
      : navigate("/GameVsPlayer");
  }

  return (
    <div id="select-game-mode">
      <div className="text-boxes">
        <h1>TIC-TAC-TOE</h1>
      </div>
      <div id="selectSide">
        <h3>Select Game Mode</h3>
        <div className="btn-group gap-4" id="SGMBtns">
          <button
            className="button"
            onClick={() => navigate("/GameVsAi/")}
            type="button"
          >
            <DesktopIcon />
            <h4>Player vs Computer</h4>
          </button>
          <button
            className="button"
            onClick={() => navigate("/GameVsPlayer/")}
            type="button"
          >
            <UserIcon />
            <h4>Player vs Player</h4>
          </button>
          <button className="button" onClick={decideGameMode} type="button">
            <ShuffleIcon />
            <h4>Random Game</h4>
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainMenu;

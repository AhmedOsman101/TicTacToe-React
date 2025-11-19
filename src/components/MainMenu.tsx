import { useNavigate } from "react-router";

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
          <button onClick={() => navigate("/GameVsAi/")} type="button">
            <span className="fa-desktop" />
            <h4>Player vs Computer</h4>
          </button>
          <button onClick={() => navigate("/GameVsPlayer/")} type="button">
            <span className="fa-user" />
            <h4>Player vs Player</h4>
          </button>
          <button onClick={decideGameMode} type="button">
            <span className="fa-shuffle" />
            <h4>Random Game</h4>
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainMenu;

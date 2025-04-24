import { useNavigate } from "react-router-dom";

const ChooseDifficulty = () => {
  const navigate = useNavigate();
  return (
    <>
      <div id="select-game-mode">
        <div className="text-boxes">
          <h1>TIC-TAC-TOE</h1>
        </div>
        <div id="selectSide">
          <h3>Choose Difficulty</h3>
          <div className="btn-group" id="SGMBtns">
            <button onClick={() => navigate("/GameVsAi/Beginner")}>
              <h4>Beginner 🤙🏻</h4>
            </button>
            <button onClick={() => navigate("/GameVsAi/Advanced")}>
              <h4>Hardcore 💀</h4>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChooseDifficulty;

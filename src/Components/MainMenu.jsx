import {  useNavigate } from "react-router-dom";
const MainMenu = () => {
    const navigate = useNavigate();
    const decideGameMode = () => {
        console.log("hello world");
        return Math.ceil(Math.random() * 2) == 1
            ? navigate("/GameVsAi")
            : navigate("/GameVsPlayer");
    };
    return (
        <>
            <div id="select-game-mode">
                <div className="text-boxes">
                    <h1>TIC-TAC-TOE</h1>
                </div>
                <div id="selectSide">
                    <h3>select game mode</h3>
                    <div className="btn-group" id="SGMBtns">
                        <button
                            onClick={() =>
                                navigate("/TicTacToe-React/GameVsAi/")
                            }>
                            <span className="fa-desktop"></span>
                            <h4>player vs computer</h4>
                        </button>
                        <button
                            onClick={() =>
                                navigate("/TicTacToe-React/GameVsPlayer/")
                            }>
                            <span className="fa-user"></span>
                            <h4>player vs player</h4>
                        </button>
                        <button onClick={decideGameMode}>
                            <span className="fa-shuffle"></span>
                            <h4>Random game</h4>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MainMenu;

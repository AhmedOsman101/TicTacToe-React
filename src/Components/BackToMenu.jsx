import { useNavigate } from "react-router-dom";
const BackToMenu = () => {
    const navigate = useNavigate();
    return (
        <>
            <button onClick={() => navigate("/TicTacToe-React/")}>
                <h4>Back To Main Menu</h4>
            </button>
        </>
    );
};

export default BackToMenu;

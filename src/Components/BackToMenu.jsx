import { useNavigate } from "react-router-dom";
import { GameStateContext } from "../Context/GameStateContext";
import { useContext } from "react"; // Import useEffect

const BackToMenu = () => {
    const navigate = useNavigate();
    const { dispatch } = useContext(GameStateContext);
    const handleClick = () => {
        dispatch({ type: "BACK_TO_MENU" });
        navigate("/");
    };
    return (
        <>
            <button onClick={handleClick}>
                <h4>Back To Main Menu</h4>
            </button>
        </>
    );
};

export default BackToMenu;

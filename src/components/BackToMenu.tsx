import { useNavigate } from "react-router";
import { useGameActions } from "@/hooks/use-game-actions";

function BackToMenu() {
  const navigate = useNavigate();
  const { backToMenu } = useGameActions();
  function handleClick() {
    backToMenu();
    return navigate("/");
  }

  return (
    <button
      className="button flex w-max items-center"
      onClick={handleClick}
      type="button"
    >
      Back To Main Menu
    </button>
  );
}

export default BackToMenu;

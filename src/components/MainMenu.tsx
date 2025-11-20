import { useNavigate } from "react-router";
import DesktopIcon from "@/components/icons/DesktopIcon";
import ShuffleIcon from "@/components/icons/ShuffleIcon";
import UserIcon from "@/components/icons/UserIcon";

function MainMenu() {
  const navigate = useNavigate();
  function decideGameMode() {
    return Math.floor(Math.random() * 2) === 1
      ? navigate("/GameVsAi")
      : navigate("/GameVsPlayer");
  }

  return (
    <div className="relative flex h-dvh w-dvw flex-col items-center justify-center gap-4 text-3xl">
      <div className="grid gap-4">
        <h1 className="font-bold text-2xl">Tic Tac Toe</h1>
      </div>
      <div className="grid place-items-center gap-12">
        <h3>Select Game Mode</h3>
        <div className="flex gap-4">
          <button
            className="button flex w-max items-center"
            onClick={() => navigate("/GameVsAi/")}
            type="button"
          >
            <DesktopIcon />
            <h4>Player vs Computer</h4>
          </button>
          <button
            className="button flex w-max items-center"
            onClick={() => navigate("/GameVsPlayer/")}
            type="button"
          >
            <UserIcon />
            <h4>Player vs Player</h4>
          </button>
          <button
            className="button flex w-max items-center"
            onClick={decideGameMode}
            type="button"
          >
            <ShuffleIcon />
            <h4>Random Game</h4>
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainMenu;

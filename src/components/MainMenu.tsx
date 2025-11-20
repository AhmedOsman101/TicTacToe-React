import { MonitorIcon as DesktopIcon, UserIcon } from "lucide-react";
import { Link } from "react-router";

function MainMenu() {
  return (
    <div className="relative flex h-dvh w-dvw flex-col items-center justify-center gap-4 text-3xl">
      <div className="grid gap-4">
        <h1 className="font-bold text-2xl">Tic Tac Toe</h1>
      </div>
      <div className="grid place-items-center gap-12">
        <h3>Select Game Mode</h3>
        <div className="flex gap-4">
          <Link className="button flex w-max items-center" to="ai">
            <DesktopIcon className="mr-2 size-10" />
            <span>Player vs Computer</span>
          </Link>
          <Link className="button flex w-max items-center" to="pvp">
            <UserIcon className="mr-2 size-10" />
            <span>Player vs Player</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MainMenu;

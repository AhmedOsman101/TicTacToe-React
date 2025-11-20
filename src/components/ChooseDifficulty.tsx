import { Link, useNavigate } from "react-router";

function ChooseDifficulty() {
  const navigate = useNavigate();

  function decideGameMode() {
    return Math.floor(Math.random() * 2) === 1
      ? navigate("advanced")
      : navigate("beginner");
  }

  return (
    <div className="relative flex h-dvh w-dvw flex-col items-center justify-center gap-4 text-3xl">
      <div className="grid gap-4">
        <h1 className="font-bold text-2xl">Tic Tac Toe</h1>
      </div>
      <div className="grid place-items-center gap-12">
        <h3>Choose Difficulty</h3>
        <div className="flex gap-4">
          <Link className="button flex w-max items-center" to="beginner">
            Beginner
          </Link>
          <Link className="button flex w-max items-center" to="advanced">
            Hardcore
          </Link>
          <button
            className="button flex w-max items-center"
            onClick={decideGameMode}
            type="button"
          >
            <span>Random</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChooseDifficulty;

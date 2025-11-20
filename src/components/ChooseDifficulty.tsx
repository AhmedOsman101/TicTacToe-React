import { useNavigate } from "react-router";

const ChooseDifficulty = () => {
  const navigate = useNavigate();
  return (
    <div className="relative flex h-dvh w-dvw flex-col items-center justify-center gap-4 text-3xl">
      <div className="grid gap-4">
        <h1 className="font-bold text-2xl">Tic Tac Toe</h1>
      </div>
      <div className="grid place-items-center gap-12">
        <h3>Choose Difficulty</h3>
        <div className="flex gap-4">
          <button
            className="button flex w-max items-center"
            onClick={() => navigate("/GameVsAi/Beginner")}
            type="button"
          >
            <h4>Beginner 🤙🏻</h4>
          </button>
          <button
            className="button flex w-max items-center"
            onClick={() => navigate("/GameVsAi/Advanced")}
            type="button"
          >
            <h4>Hardcore 💀</h4>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChooseDifficulty;

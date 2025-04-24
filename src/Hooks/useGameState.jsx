import { useContext } from "react";
import { GameStateContext } from "../Context/GameStateContext";

export const useGameState = () => {
  const context = useContext(GameStateContext);

  if (!context) {
    throw new Error(
      "useGameState must be used within a GameStateContextProvider"
    );
  }

  return context;
};

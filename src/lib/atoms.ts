import { createStore } from "jotai";
import { atomWithImmer } from "jotai-immer";
import type { GameState, Player } from "./types";

const gameStateStore = createStore();

const initialState: GameState = {
  XScore: 0,
  OScore: 0,
  XTurn: true,
  XLocations: [],
  OLocations: [],
  winner: null,
  isDraw: false,
  gameEnded: false,
  board: Array<Player>(9).fill(null),
};

const gameStateAtom = atomWithImmer<GameState>(initialState);

export { gameStateAtom, gameStateStore, initialState };

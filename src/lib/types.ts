type Side = "X" | "O";
type Player = Side | null;
type Board = Player[];

type GameState = {
  XScore: number;
  OScore: number;
  XTurn: boolean;
  XLocations: number[];
  OLocations: number[];
  winner: Player;
  isDraw: boolean;
  gameEnded: boolean;
  board: Board;
};

export type { GameState, Player, Board, Side };

export interface Player {
  id: number;
  name: string;
  avatar: string;
}

export interface StartGameForm {
  player1: Player;
  player2: Player;
}

import {Player} from '@/store/Player';

export type Dice = 1 | 2 | 3 | 4 | 5 | 6;

export interface StartGameForm {
  player1: Player;
  player2: Player;
}

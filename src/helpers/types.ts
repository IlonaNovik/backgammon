import {Player} from '@/store/Player';

export type Dice = 1 | 2 | 3 | 4 | 5 | 6;

export interface StartGameForm {
  red: Player;
  blue: Player;
}

export type CheckerPosition = {
  boardPosition: number;
  itemPosition: number;
};

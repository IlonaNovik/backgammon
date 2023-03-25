import {action, makeObservable, observable} from 'mobx';

import {Player} from './Player';

export class Game {
  @observable
  red: Player;

  @observable
  blue: Player;

  @observable
  currentPlayer: Player;

  constructor(red: Player, blue: Player) {
    makeObservable(this);

    this.red = red;
    this.blue = blue;
    this.currentPlayer = Math.random() > 0.5 ? red : blue;
    this.initCheckers();
  }

  @action
  public switchPlayer = () => {
    this.currentPlayer = this.currentPlayer === this.red ? this.blue : this.red;
  };

  public initCheckers = () => {
    this.red.initCheckers();
    this.blue.initCheckers();
    this.rollDice();
  };

  @action
  public rollDice = () => {
    this.currentPlayer.rollDice();
  };
}

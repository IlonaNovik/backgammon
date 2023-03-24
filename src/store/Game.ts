import {observable} from 'mobx';

import {Player} from './Player';

export class Game {
  @observable
  player1: Player;

  @observable
  player2: Player;

  @observable
  currentPlayer: Player;

  constructor(player1: Player, player2: Player) {
    this.player1 = player1;
    this.player2 = player2;
    this.currentPlayer = player1;
    this.initCheckers();
  }

  public switchPlayer = () => {
    this.currentPlayer = this.currentPlayer === this.player1 ? this.player2 : this.player1;
  };

  public initCheckers = () => {
    this.player1.initCheckers();
    this.player2.initCheckers();
  };
}

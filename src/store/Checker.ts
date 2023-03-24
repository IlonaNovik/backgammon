import {action, makeObservable, observable} from 'mobx';

import {Player} from './Player';

export interface CheckerPosition {
  xAxis: 'top' | 'bottom';
  yAxis: 'left' | 'right';
  position: number;
}

export class Checker {
  public id: `player-${number}-${number}`;

  @observable
  public player: Player;

  @observable
  public position: CheckerPosition;

  constructor(id: number, player: Player, position: CheckerPosition) {
    makeObservable(this);

    this.id = `player-${player.id}-${id}`;
    this.player = player;
    this.position = position;
  }

  @action
  public getPosition = () => {
    return this.position;
  };

  @action
  public setPosition = (position: CheckerPosition) => {
    this.position = position;
  };
}

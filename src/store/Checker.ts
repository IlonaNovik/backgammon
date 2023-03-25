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
  public color: 'red' | 'blue';

  @observable
  public position: CheckerPosition;

  @observable
  public isOnBar: boolean = false;

  @observable
  public isOnHome: boolean = false;

  @observable
  public isOnBoard: boolean = false;

  @observable
  public canMove: boolean = false;

  constructor(id: number, player: Player, position: CheckerPosition, color: 'red' | 'blue') {
    makeObservable(this);

    this.id = `player-${player.id}-${id}`;
    this.player = player;
    this.position = position;
    this.color = color;
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

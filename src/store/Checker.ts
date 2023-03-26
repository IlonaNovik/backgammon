import {action, makeObservable, observable} from 'mobx';

export class Checker {
  public id: `player-${'red' | 'blue'}-${number}`;

  @observable
  public color: 'red' | 'blue';

  @observable
  public position: number;

  @observable
  public isOnBar: boolean = false;

  @observable
  public isOnHome: boolean = false;

  @observable
  public isOnBoard: boolean = false;

  @observable
  public canMove: boolean = false;

  constructor(id: `player-${'red' | 'blue'}-${number}`, position: number, color: 'red' | 'blue') {
    makeObservable(this);

    this.id = id;
    this.position = position;
    this.color = color;
  }

  @action
  public getPosition = () => {
    return this.position;
  };

  @action
  public setPosition = (position: number) => {
    this.position = position;
  };
}

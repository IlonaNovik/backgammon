import {action, makeObservable, observable} from 'mobx';

import {Checker} from './Checker';

import {Dice} from '@/helpers/types';

export class Player {
  public type: 'red' | 'blue';
  public name: string;
  public avatar: string;

  @observable
  public checkersOnBoard: Checker[] | undefined;

  @observable
  public checkersHome: Checker[] | undefined;

  @observable
  public dice: [Dice, Dice] | undefined;

  @observable
  public draggingChecker: Checker | undefined;

  constructor(type: 'red' | 'blue', name: string, avatar: string) {
    makeObservable(this);

    this.type = type;
    this.name = name;
    this.avatar = avatar;
  }

  @action
  public rollDice = () => {
    this.dice = [(Math.floor(Math.random() * 6) + 1) as Dice, (Math.floor(Math.random() * 6) + 1) as Dice];
    for (const checker of this.checkersOnBoard ?? []) {
      checker.canMove = true;
    }
  };

  @action
  public setDraggingChecker(checker: Checker | undefined) {
    this.draggingChecker = checker;
  }

  @action
  public initCheckers = () => {
    if (this.type === 'red') {
      this.checkersOnBoard = [
        new Checker(`player-${this.type}-${1}`, 1, 'red'),
        new Checker(`player-${this.type}-${2}`, 1, 'red'),

        new Checker(`player-${this.type}-${3}`, 12, 'red'),
        new Checker(`player-${this.type}-${4}`, 12, 'red'),
        new Checker(`player-${this.type}-${5}`, 12, 'red'),
        new Checker(`player-${this.type}-${6}`, 12, 'red'),
        new Checker(`player-${this.type}-${7}`, 12, 'red'),

        new Checker(`player-${this.type}-${8}`, 17, 'red'),
        new Checker(`player-${this.type}-${9}`, 17, 'red'),
        new Checker(`player-${this.type}-${10}`, 17, 'red'),

        new Checker(`player-${this.type}-${11}`, 19, 'red'),
        new Checker(`player-${this.type}-${12}`, 19, 'red'),
        new Checker(`player-${this.type}-${13}`, 19, 'red'),
        new Checker(`player-${this.type}-${14}`, 19, 'red'),
        new Checker(`player-${this.type}-${15}`, 19, 'red'),
      ];
    } else {
      this.checkersOnBoard = [
        new Checker(`player-${this.type}-${1}`, 24, 'blue'),
        new Checker(`player-${this.type}-${2}`, 24, 'blue'),

        new Checker(`player-${this.type}-${3}`, 13, 'blue'),
        new Checker(`player-${this.type}-${4}`, 13, 'blue'),
        new Checker(`player-${this.type}-${5}`, 13, 'blue'),
        new Checker(`player-${this.type}-${6}`, 13, 'blue'),
        new Checker(`player-${this.type}-${7}`, 13, 'blue'),

        new Checker(`player-${this.type}-${8}`, 8, 'blue'),
        new Checker(`player-${this.type}-${9}`, 8, 'blue'),
        new Checker(`player-${this.type}-${10}`, 8, 'blue'),

        new Checker(`player-${this.type}-${11}`, 6, 'blue'),
        new Checker(`player-${this.type}-${12}`, 6, 'blue'),
        new Checker(`player-${this.type}-${13}`, 6, 'blue'),
        new Checker(`player-${this.type}-${14}`, 6, 'blue'),
        new Checker(`player-${this.type}-${15}`, 6, 'blue'),
      ];
    }
  };
}

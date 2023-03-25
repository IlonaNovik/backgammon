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
        new Checker(1, this, {xAxis: 'top', yAxis: 'right', position: 5}, 'red'),
        new Checker(2, this, {xAxis: 'top', yAxis: 'right', position: 5}, 'red'),

        new Checker(3, this, {xAxis: 'top', yAxis: 'left', position: 0}, 'red'),
        new Checker(4, this, {xAxis: 'top', yAxis: 'left', position: 0}, 'red'),
        new Checker(5, this, {xAxis: 'top', yAxis: 'left', position: 0}, 'red'),
        new Checker(6, this, {xAxis: 'top', yAxis: 'left', position: 0}, 'red'),
        new Checker(7, this, {xAxis: 'top', yAxis: 'left', position: 0}, 'red'),

        new Checker(8, this, {xAxis: 'bottom', yAxis: 'left', position: 4}, 'red'),
        new Checker(9, this, {xAxis: 'bottom', yAxis: 'left', position: 4}, 'red'),
        new Checker(10, this, {xAxis: 'bottom', yAxis: 'left', position: 4}, 'red'),

        new Checker(11, this, {xAxis: 'bottom', yAxis: 'right', position: 0}, 'red'),
        new Checker(12, this, {xAxis: 'bottom', yAxis: 'right', position: 0}, 'red'),
        new Checker(13, this, {xAxis: 'bottom', yAxis: 'right', position: 0}, 'red'),
        new Checker(14, this, {xAxis: 'bottom', yAxis: 'right', position: 0}, 'red'),
        new Checker(15, this, {xAxis: 'bottom', yAxis: 'right', position: 0}, 'red'),
      ];
    } else {
      this.checkersOnBoard = [
        new Checker(1, this, {xAxis: 'bottom', yAxis: 'right', position: 5}, 'blue'),
        new Checker(2, this, {xAxis: 'bottom', yAxis: 'right', position: 5}, 'blue'),

        new Checker(3, this, {xAxis: 'bottom', yAxis: 'left', position: 0}, 'blue'),
        new Checker(4, this, {xAxis: 'bottom', yAxis: 'left', position: 0}, 'blue'),
        new Checker(5, this, {xAxis: 'bottom', yAxis: 'left', position: 0}, 'blue'),
        new Checker(6, this, {xAxis: 'bottom', yAxis: 'left', position: 0}, 'blue'),
        new Checker(7, this, {xAxis: 'bottom', yAxis: 'left', position: 0}, 'blue'),

        new Checker(8, this, {xAxis: 'top', yAxis: 'left', position: 4}, 'blue'),
        new Checker(9, this, {xAxis: 'top', yAxis: 'left', position: 4}, 'blue'),
        new Checker(10, this, {xAxis: 'top', yAxis: 'left', position: 4}, 'blue'),

        new Checker(11, this, {xAxis: 'top', yAxis: 'right', position: 0}, 'blue'),
        new Checker(12, this, {xAxis: 'top', yAxis: 'right', position: 0}, 'blue'),
        new Checker(13, this, {xAxis: 'top', yAxis: 'right', position: 0}, 'blue'),
        new Checker(14, this, {xAxis: 'top', yAxis: 'right', position: 0}, 'blue'),
        new Checker(15, this, {xAxis: 'top', yAxis: 'right', position: 0}, 'blue'),
      ];
    }
  };
}

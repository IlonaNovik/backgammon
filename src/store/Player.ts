import {action, makeObservable, observable} from 'mobx';

import {Checker} from './Checker';

import {Dice} from '@/helpers/types';

export class Player {
  public id: number;
  public name: string;
  public avatar: string;

  @observable
  public checkers: Checker[] | undefined;

  @observable
  public dice: [Dice, Dice] | undefined;

  constructor(id: number, name: string, avatar: string) {
    makeObservable(this);

    this.id = id;
    this.name = name;
    this.avatar = avatar;
  }

  @action
  public rollDice = () => {
    this.dice = [(Math.floor(Math.random() * 6) + 1) as Dice, (Math.floor(Math.random() * 6) + 1) as Dice];
  };

  public getCheckers = () => {
    return this.checkers;
  };

  @action
  public initCheckers = () => {
    if (this.id === 1) {
      this.checkers = [
        new Checker(1, this, {xAxis: 'top', yAxis: 'right', position: 5}),
        new Checker(2, this, {xAxis: 'top', yAxis: 'right', position: 5}),

        new Checker(3, this, {xAxis: 'top', yAxis: 'left', position: 0}),
        new Checker(4, this, {xAxis: 'top', yAxis: 'left', position: 0}),
        new Checker(5, this, {xAxis: 'top', yAxis: 'left', position: 0}),
        new Checker(6, this, {xAxis: 'top', yAxis: 'left', position: 0}),
        new Checker(7, this, {xAxis: 'top', yAxis: 'left', position: 0}),

        new Checker(8, this, {xAxis: 'bottom', yAxis: 'left', position: 4}),
        new Checker(9, this, {xAxis: 'bottom', yAxis: 'left', position: 4}),
        new Checker(10, this, {xAxis: 'bottom', yAxis: 'left', position: 4}),

        new Checker(11, this, {xAxis: 'bottom', yAxis: 'right', position: 0}),
        new Checker(12, this, {xAxis: 'bottom', yAxis: 'right', position: 0}),
        new Checker(13, this, {xAxis: 'bottom', yAxis: 'right', position: 0}),
        new Checker(14, this, {xAxis: 'bottom', yAxis: 'right', position: 0}),
        new Checker(15, this, {xAxis: 'bottom', yAxis: 'right', position: 0}),
      ];
    } else {
      this.checkers = [
        new Checker(1, this, {xAxis: 'bottom', yAxis: 'right', position: 5}),
        new Checker(2, this, {xAxis: 'bottom', yAxis: 'right', position: 5}),

        new Checker(3, this, {xAxis: 'bottom', yAxis: 'left', position: 0}),
        new Checker(4, this, {xAxis: 'bottom', yAxis: 'left', position: 0}),
        new Checker(5, this, {xAxis: 'bottom', yAxis: 'left', position: 0}),
        new Checker(6, this, {xAxis: 'bottom', yAxis: 'left', position: 0}),
        new Checker(7, this, {xAxis: 'bottom', yAxis: 'left', position: 0}),

        new Checker(8, this, {xAxis: 'top', yAxis: 'left', position: 4}),
        new Checker(9, this, {xAxis: 'top', yAxis: 'left', position: 4}),
        new Checker(10, this, {xAxis: 'top', yAxis: 'left', position: 4}),

        new Checker(11, this, {xAxis: 'top', yAxis: 'right', position: 0}),
        new Checker(12, this, {xAxis: 'top', yAxis: 'right', position: 0}),
        new Checker(13, this, {xAxis: 'top', yAxis: 'right', position: 0}),
        new Checker(14, this, {xAxis: 'top', yAxis: 'right', position: 0}),
        new Checker(15, this, {xAxis: 'top', yAxis: 'right', position: 0}),
      ];
    }
  };
}

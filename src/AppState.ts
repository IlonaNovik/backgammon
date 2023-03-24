import {makeObservable, observable} from 'mobx';

import {Player, StartGameForm} from '@/helpers/types';

class AppState {
  @observable
  public isGame: boolean = false;

  @observable
  public player1: Player | undefined;

  @observable
  public player2: Player | undefined;

  constructor() {
    makeObservable(this);
  }

  public setGame = (isGame: boolean) => {
    this.isGame = isGame;
  };

  public submitPlayersAndStartGame = (players: StartGameForm) => {
    this.player1 = players.player1;
    this.player2 = players.player2;
    this.setGame(true);
  };
}

export const appState = new AppState();

import {action, makeObservable, observable} from 'mobx';

import {Game} from './Game';
import {Player} from './Player';

import {StartGameForm} from '@/helpers/types';

class GameState {
  @observable
  public game: Game | undefined;

  constructor() {
    makeObservable(this);

    // Initialize a game with default players for development purposes
    this.game = new Game(
      new Player('red', 'Player 1', 'https://i.pravatar.cc/150?img=1'),
      new Player('blue', 'Player 2', 'https://i.pravatar.cc/150?img=2')
    );
  }

  public startGame = ({red, blue}: StartGameForm) => {
    this.game = new Game(new Player('red', red.name, red.avatar), new Player('blue', blue.name, blue.avatar));
  };

  @action
  public endGame = () => {
    this.game = undefined;
  };

  @action
  public restartGame = () => {
    this.game?.initCheckers();
  };
}

export const gameState = new GameState();

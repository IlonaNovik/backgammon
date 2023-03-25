import {makeObservable, observable} from 'mobx';

import {Game} from './Game';
import {Player} from './Player';

import {StartGameForm} from '@/helpers/types';

class GameState {
  @observable
  public game: Game | undefined;

  constructor() {
    makeObservable(this);

    this.game = new Game(
      new Player(1, 'Player 1', 'https://i.pravatar.cc/150?img=1'),
      new Player(2, 'Player 2', 'https://i.pravatar.cc/150?img=2')
    );
  }

  public startGame = ({player1, player2}: StartGameForm) => {
    this.game = new Game(new Player(1, player1.name, player1.avatar), new Player(2, player2.name, player2.avatar));
  };

  public endGame = () => {
    this.game = undefined;
  };

  public restartGame = () => {
    this.game?.initCheckers();
  };
}

export const gameState = new GameState();

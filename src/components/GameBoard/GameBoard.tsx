import {observer} from 'mobx-react-lite';

import {Dice} from '../ui/Dice';

import {GameBoardSection} from './GameBoardSections';

import {gameState} from '@/store/appState';

export const GameBoard: React.FC = observer(() => {
  const playerRedCheckers = gameState.game?.red.checkersOnBoard;
  const playerBlueCheckers = gameState.game?.blue.checkersOnBoard;
  const currentPlayer = gameState.game?.currentPlayer;

  return (
    <div className="flex">
      <div className="flex">
        <div className="board">
          <GameBoardSection
            xAxis="top"
            yAxis="left"
            playerRedCheckers={playerRedCheckers ?? []}
            playerBlueCheckers={playerBlueCheckers ?? []}
            currentPlayer={currentPlayer}
          />
          <GameBoardSection
            xAxis="bottom"
            yAxis="left"
            playerRedCheckers={playerRedCheckers ?? []}
            playerBlueCheckers={playerBlueCheckers ?? []}
            currentPlayer={currentPlayer}
          />
        </div>
        <div className="board relative">
          <GameBoardSection
            xAxis="top"
            yAxis="right"
            playerRedCheckers={playerRedCheckers ?? []}
            playerBlueCheckers={playerBlueCheckers ?? []}
            currentPlayer={currentPlayer}
          />
          <GameBoardSection
            xAxis="bottom"
            yAxis="right"
            playerRedCheckers={playerRedCheckers ?? []}
            playerBlueCheckers={playerBlueCheckers ?? []}
            currentPlayer={currentPlayer}
          />
          {gameState.game && gameState.game.currentPlayer.dice && (
            <div className="absolute top-[calc(50%-2rem)] left-[calc(50%-4rem)] flex ">
              <Dice roll={gameState.game?.currentPlayer.dice?.[0]} />
              <Dice roll={gameState.game?.currentPlayer.dice?.[1]} />
            </div>
          )}
        </div>
        <div />
      </div>
      <div className="board border-l-0 w-24 flex flex-col justify-between">
        <div>
          {gameState.game?.red.checkersHome?.map((item) => (
            <div key={item.id} className="h-4 border-b-2 border-black bg-blue" />
          ))}
        </div>
        <div>
          {gameState.game?.blue.checkersHome?.map((item) => (
            <div key={item.id} className="h-4 border-t-2 border-black bg-red" />
          ))}
        </div>
      </div>
    </div>
  );
});

import {observer} from 'mobx-react-lite';

import {Dice} from '../ui/Dice';

import {GameBoardSection} from './GameBoardSections';

import {gameState} from '@/store/appState';

export const GameBoard: React.FC = observer(() => {
  const player1Checkers = gameState.game?.player1.checkers;
  const player2Checkers = gameState.game?.player2.checkers;

  return (
    <div className="flex">
      <div className="flex">
        <div className="board">
          <GameBoardSection
            xAxis="top"
            yAxis="left"
            player1Checkers={player1Checkers ?? []}
            player2Checkers={player2Checkers ?? []}
          />
          <GameBoardSection
            xAxis="bottom"
            yAxis="left"
            player1Checkers={player1Checkers ?? []}
            player2Checkers={player2Checkers ?? []}
          />
        </div>
        <div className="board relative">
          <GameBoardSection
            xAxis="top"
            yAxis="right"
            player1Checkers={player1Checkers ?? []}
            player2Checkers={player2Checkers ?? []}
          />
          <GameBoardSection
            xAxis="bottom"
            yAxis="right"
            player1Checkers={player1Checkers ?? []}
            player2Checkers={player2Checkers ?? []}
          />
          {gameState.game && (
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
          {[...Array(15).keys()].map((item) => (
            <div key={item} className="h-4 border-b-2 border-black bg-blue" />
          ))}
        </div>
        <div>
          {[...Array(15).keys()].map((item) => (
            <div key={item} className="h-4 border-t-2 border-black bg-red" />
          ))}
        </div>
      </div>
    </div>
  );
});

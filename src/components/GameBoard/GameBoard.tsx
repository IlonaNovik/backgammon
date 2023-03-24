import {observer} from 'mobx-react-lite';

import {GameBoardSection} from './GameBoardSections';

import {gameState} from '@/store/appState';

export const GameBoard: React.FC = observer(() => {
  const {player1, player2} = gameState.game!;
  const {checkers: player1Checkers} = player1;
  const {checkers: player2Checkers} = player2;

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
        <div className="board">
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
        </div>
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

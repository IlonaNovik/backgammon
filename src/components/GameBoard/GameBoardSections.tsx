import {Checker} from '../Checker';

import {gameState} from '@/store/appState';
import {Checker as CheckerClass, CheckerPosition} from '@/store/Checker';

interface GameBoardSectionProps {
  xAxis: 'top' | 'bottom';
  yAxis: 'left' | 'right';
  player1Checkers: CheckerClass[];
  player2Checkers: CheckerClass[];
}

export const GameBoardSection: React.FC<GameBoardSectionProps> = ({xAxis, yAxis, player1Checkers, player2Checkers}) => {
  const className = xAxis === 'top' ? 'triangle triangle-top relative' : 'triangle triangle-bottom relative';
  return (
    <div className={`${xAxis}-${yAxis}`}>
      {[...Array(6).keys()].map((index) => (
        <div id={`${xAxis}-${yAxis}-${index}`} key={index} className={className}>
          {placeCheckers({
            checkers: player1Checkers,
            position: {xAxis, yAxis, position: index},
          })}
          {placeCheckers({
            checkers: player2Checkers,
            position: {xAxis, yAxis, position: index},
          })}
        </div>
      ))}
    </div>
  );
};

interface PlaceCheckersParams {
  checkers: CheckerClass[];
  position: CheckerPosition;
}

function placeCheckers({checkers, position: {xAxis, yAxis, position}}: PlaceCheckersParams) {
  const filterCheckers = checkers.filter(
    (checker) =>
      checker.position.xAxis === xAxis && checker.position.yAxis === yAxis && checker.position.position === position
  );
  return filterCheckers.map((checker, i) => (
    <Checker
      key={checker.id}
      checker={checker}
      isOnTop={i === filterCheckers.length - 1}
      style={{
        [xAxis]: `calc(${'-40vh + ' + i * 4 + 'rem'})`,
      }}
      setDragging={(checker) => gameState.game?.currentPlayer.setDraggingChecker(checker)}
    />
  ));
}

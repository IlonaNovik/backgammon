import {Checker} from '../Checker';

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
            type: 'red',
          })}
          {placeCheckers({
            checkers: player2Checkers,
            position: {xAxis, yAxis, position: index},
            type: 'blue',
          })}
        </div>
      ))}
    </div>
  );
};

interface PlaceCheckersParams {
  checkers: CheckerClass[];
  position: CheckerPosition;
  type: 'red' | 'blue';
}

function placeCheckers({checkers, position: {xAxis, yAxis, position}, type}: PlaceCheckersParams) {
  return checkers
    .filter(
      (checker) =>
        checker.position.xAxis === xAxis && checker.position.yAxis === yAxis && checker.position.position === position
    )
    .map((checker, i) => (
      <Checker
        key={checker.id}
        type={type}
        inGame={true}
        style={{
          [xAxis]: `calc(${'-40vh + ' + i * 4 + 'rem'})`,
        }}
      />
    ));
}

import {useMemo} from 'react';
import {observer} from 'mobx-react-lite';

import {getAvailableMoves, getCheckerVerticalPosition, getSectionPositions, placeCheckers} from './helpers';

import {Colors} from '@/helpers/constants';
import {CheckerPosition} from '@/helpers/types';
import {Checker as CheckerClass} from '@/store/Checker';
import {Player} from '@/store/Player';

interface GameBoardSectionProps {
  xAxis: 'top' | 'bottom';
  yAxis: 'left' | 'right';
  playerRedCheckers: CheckerClass[];
  playerBlueCheckers: CheckerClass[];
  currentPlayer?: Player;
}

export const GameBoardSection: React.FC<GameBoardSectionProps> = observer((props) => {
  const {xAxis, yAxis, playerRedCheckers, playerBlueCheckers, currentPlayer} = props;
  const sectionPositions = getSectionPositions(xAxis, yAxis);

  const className = xAxis === 'top' ? 'triangle triangle-top relative' : 'triangle triangle-bottom relative';

  const availableMoves: CheckerPosition[] = useMemo(() => {
    if (!currentPlayer) return [];
    const opponentCheckers = currentPlayer.type === 'red' ? playerBlueCheckers : playerRedCheckers;

    return getAvailableMoves(sectionPositions, currentPlayer, opponentCheckers);
  }, [sectionPositions, currentPlayer]);

  return (
    <div className={`${xAxis}-${yAxis}`}>
      {sectionPositions.map((position) => (
        <div key={position} id={`${xAxis}-${yAxis}-${position}`} className={className}>
          {availableMoves.map((i) => i.boardPosition).includes(position) && (
            <div
              className="placeholder"
              style={{
                [xAxis]: getCheckerVerticalPosition(availableMoves, position),
                boxShadow: `0px 0px 5px 5px ${currentPlayer && Colors[currentPlayer?.type]}`,
              }}
            />
          )}
          {placeCheckers(playerRedCheckers, position, xAxis)}
          {placeCheckers(playerBlueCheckers, position, xAxis)}
        </div>
      ))}
    </div>
  );
});

import {Checker} from '../Checker';

import {CheckerPosition} from '@/helpers/types';
import {gameState} from '@/store/appState';
import {Checker as CheckerClass} from '@/store/Checker';
import {Player} from '@/store/Player';

export const getIdIncrement = (xAxis: 'top' | 'bottom', yAxis: 'left' | 'right'): number => {
  if (xAxis === 'top' && yAxis === 'right') return 0;
  if (xAxis === 'top' && yAxis === 'left') return 6;
  if (xAxis === 'bottom' && yAxis === 'left') return 12;
  if (xAxis === 'bottom' && yAxis === 'right') return 18;
  return 0;
};

export function placeCheckers(checkers: CheckerClass[], position: number, xAxis: 'top' | 'bottom') {
  const filterCheckers = checkers.filter((checker) => checker.position === position);
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

export function getSectionPositions(xAxis: 'top' | 'bottom', yAxis: 'left' | 'right'): number[] {
  const positions = [...Array(6).keys()].map((index) => getIdIncrement(xAxis, yAxis) + index + 1);

  return xAxis === 'bottom' ? positions : positions.reverse();
}

export const getCheckerVerticalPosition = (availableMoves: CheckerPosition[], index: number) => {
  const move = availableMoves.find((i) => i.boardPosition === index);
  const movePosition = (move && (move.itemPosition > 4 ? 4 : move.itemPosition)) ?? 0;

  return move ? `calc(${'-40vh + ' + movePosition * 4 + 'rem'})` : '0';
};

export function getAvailableMoves(
  sectionPositions: number[],
  currentPlayer: Player,
  opponentCheckers: CheckerClass[]
): CheckerPosition[] {
  const {type, dice, draggingChecker, checkersOnBoard: playerCheckers} = currentPlayer;

  if (!draggingChecker || !dice || !playerCheckers) return [];

  const currentPosition = draggingChecker.position;
  const availableMoves: CheckerPosition[] = [];

  if (type === 'red') {
    const move1 = getAvailableMovesForChecker(playerCheckers, opponentCheckers, currentPosition + dice[0]);
    const move2 = getAvailableMovesForChecker(playerCheckers, opponentCheckers, currentPosition + dice[1]);
    const move3 = getAvailableMovesForChecker(playerCheckers, opponentCheckers, currentPosition + dice[0] + dice[1]);

    move1 && availableMoves.push(move1);
    move2 && availableMoves.push(move2);
    move3 && availableMoves.push(move3);
  }

  if (type === 'blue') {
    const move1 = getAvailableMovesForChecker(playerCheckers, opponentCheckers, currentPosition - dice[0]);
    const move2 = getAvailableMovesForChecker(playerCheckers, opponentCheckers, currentPosition - dice[1]);
    const move3 = getAvailableMovesForChecker(playerCheckers, opponentCheckers, currentPosition - dice[0] - dice[1]);

    move1 && availableMoves.push(move1);
    move2 && availableMoves.push(move2);
    move3 && availableMoves.push(move3);
  }

  return availableMoves.filter((move) => sectionPositions.includes(move.boardPosition));
}

function getAvailableMovesForChecker(
  playerCheckers: CheckerClass[],
  opponentCheckers: CheckerClass[],
  requestedPosition: number
) {
  const opponentChecker = opponentCheckers.filter((checker) => checker.position === requestedPosition);
  const isAllowedToMove = opponentChecker.length < 2;

  if (isAllowedToMove) {
    return {
      boardPosition: requestedPosition,
      itemPosition: playerCheckers?.filter((item) => item.position === requestedPosition).length || 0,
    };
  }
}

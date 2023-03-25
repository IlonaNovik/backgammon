import classNames from 'classnames';

import {Button} from './Button';

// @ts-ignore
import {ReactComponent as DiceIcon} from '@/assets/icons/DiceIcon.svg';
import {Player} from '@/store/Player';

interface PlayerCardProps {
  player: Player;
  isActive?: boolean;
  rollDice?: () => void;
}

export const PlayerCard: React.FC<PlayerCardProps> = ({player: {id, name, avatar}, isActive, rollDice}) => (
  <div className={classNames('flex flex-col gap-4', id === 1 && 'flex-col-reverse')}>
    <div
      className={classNames(
        'flex flex-col items-center gap-2 shadow-xl bg-yellow rounded-sm py-6 px-2',
        isActive && 'border-4 border-active'
      )}
    >
      <div
        className={classNames(
          'bg-cover bg-center w-24 h-24 rounded-full border-[8px]',
          id === 1 ? 'border-red' : 'border-blue'
        )}
        style={{backgroundImage: `url(${avatar})`}}
      />
      <h2 className="text-xl text-center uppercase">{name}</h2>
    </div>
    {isActive && (
      <Button type={id === 1 ? 'red' : 'blue'} outlined icon={<DiceIcon />} onClick={rollDice}>
        Roll dice
      </Button>
    )}
  </div>
);

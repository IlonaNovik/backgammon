import classNames from 'classnames';

import {Player} from '../../helpers/types';

interface PlayerCardProps {
  player: Player;
  isActive?: boolean;
}

export const PlayerCard: React.FC<PlayerCardProps> = ({player: {id, name, avatar}, isActive}) => (
  <div
    className={classNames(
      'flex flex-col items-center gap-2 shadow-xl bg-yellow rounded-sm py-6 px-2',
      isActive && 'border-4 border-active'
    )}
  >
    <div
      className={classNames(
        'bg-cover bg-center w-24 h-24 rounded-full border-[8px]',
        id === 1 ? 'border-blue' : 'border-red'
      )}
      style={{backgroundImage: `url(${avatar})`}}
    />
    <h2 className="text-xl text-center uppercase">{name}</h2>
  </div>
);

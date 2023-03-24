import {useState} from 'react';

import {PlayerCard} from '../ui/PlayerCard';

import {appState} from '@/AppState';
import avatar1 from '@/assets/images/avatars/1.png';
import avatar2 from '@/assets/images/avatars/2.png';
import dice from '@/assets/images/dice.png';
import {StartGameModal} from '@/components/StartGameModal';
import {Button} from '@/components/ui/Button';

export const GamePanel: React.FC = () => {
  const [isModalOpen, openModal] = useState(false);

  return appState.isGame ? (
    <div className="bg-yellow-dark w-full flex flex-col justify-between p-6">
      <PlayerCard player={{id: 1, name: 'Maayan', avatar: avatar2}} isActive={true} />
      <div className="flex flex-col gap-2">
        <Button type="blue">Restart</Button>
        <Button type="red" onClick={() => appState.setGame(false)}>
          Exit
        </Button>
      </div>
      <PlayerCard player={{id: 2, name: 'Ilona', avatar: avatar1}} isActive={false} />
    </div>
  ) : (
    <>
      <StartGameModal isOpen={isModalOpen} setIsOpen={openModal} />
      <div className="bg-yellow-dark flex flex-col items-center justify-center p-6">
        <img src={dice} alt="dice" className="w-32" />
        <h1 className="text-2xl uppercase text-center">
          Welcome to <span className="text-4xl">backgammon!</span>
        </h1>
        <Button type="red" className="w-full mt-6" onClick={() => openModal(true)}>
          Start new game
        </Button>
      </div>
    </>
  );
};

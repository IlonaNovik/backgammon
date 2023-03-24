import {useState} from 'react';

import {PlayerCard} from './ui/PlayerCard';

import dice from '@/assets/images/dice.png';
import {StartGameModal} from '@/components/StartGameModal';
import {Button} from '@/components/ui/Button';
import {gameState} from '@/store/appState';

export const GamePanel: React.FC = () => {
  const [isModalOpen, openModal] = useState(false);

  return gameState.game ? (
    <div className="bg-yellow-dark w-full flex flex-col justify-between p-6">
      <PlayerCard player={gameState.game.player1} isActive={true} />
      <div className="flex flex-col gap-2">
        <Button type="blue">Restart</Button>
        <Button type="red" onClick={() => gameState.endGame()}>
          Exit
        </Button>
      </div>
      <PlayerCard player={gameState.game.player2} isActive={false} />
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

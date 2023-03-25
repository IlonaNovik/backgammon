import {useState} from 'react';
import {observer} from 'mobx-react-lite';

import {PlayerCard} from './ui/PlayerCard';

import dice from '@/assets/images/dice.png';
import {StartGameModal} from '@/components/StartGameModal';
import {Button} from '@/components/ui/Button';
import {gameState} from '@/store/appState';

export const GamePanel: React.FC = observer(() => {
  const [isModalOpen, openModal] = useState(false);

  return gameState.game ? (
    <div className="bg-yellow-dark w-full flex flex-col justify-between p-6">
      <PlayerCard
        player={gameState.game.blue}
        isActive={gameState.game.currentPlayer.type === 'blue'}
        rollDice={() => gameState.game?.blue.rollDice()}
      />
      <div className="flex flex-col gap-2">
        <Button type="blue" onClick={() => gameState.restartGame()}>
          Restart
        </Button>
        <Button type="red" onClick={() => gameState.endGame()}>
          Exit
        </Button>
      </div>
      <PlayerCard
        player={gameState.game.red}
        isActive={gameState.game.currentPlayer.type === 'red'}
        rollDice={() => gameState.game?.red.rollDice()}
      />
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
});

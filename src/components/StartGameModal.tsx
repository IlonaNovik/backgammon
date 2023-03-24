import {useForm} from 'react-hook-form';

import {PlayerForm} from '@/components/PlayerForm';
import {Button} from '@/components/ui/Button';
import {Modal} from '@/components/ui/Modal';
import {StartGameForm} from '@/helpers/types';
import {gameState} from '@/store/appState';

interface StartGameModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const StartGameModal: React.FC<StartGameModalProps> = ({isOpen, setIsOpen}) => {
  const form = useForm<StartGameForm>({
    mode: 'onTouched',
  });

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={'Start new game'}>
      <form
        onSubmit={form.handleSubmit((payload) => {
          gameState.startGame(payload);
          setIsOpen(false);
        })}
      >
        <div className="grid grid-cols-2 mt-4">
          <PlayerForm name="player1" form={form} />
          <PlayerForm name="player2" form={form} />
        </div>
        <div className="flex justify-center mt-6">
          <Button htmlType="submit" type="red" className="w-32">
            Start
          </Button>
        </div>
      </form>
    </Modal>
  );
};

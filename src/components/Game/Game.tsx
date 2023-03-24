import {GameBoard} from '../GameBoard';
import {GamePanel} from '../GamePanel';

export const Game: React.FC = () => {
  return (
    <div className="flex">
      <GameBoard />
      <GamePanel />
    </div>
  );
};

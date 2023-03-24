import {useState} from 'react';
import classNames from 'classnames';

interface CheckerProps {
  type: 'red' | 'blue';
  inGame?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export const Checker: React.FC<CheckerProps> = ({type = 'red', inGame, className, style}) => {
  const [hide, setHide] = useState(false);

  return (
    <div
      style={style}
      className={classNames(
        'checker',
        type === 'red' ? 'checker-red' : 'checker-blue',
        inGame && 'absolute -left-[2.1vw]',
        hide && 'hide',
        className
      )}
      draggable={inGame}
      onDragStart={() => {
        setHide(true);
      }}
      onDragEnd={() => {
        setHide(false);
      }}
    />
  );
};

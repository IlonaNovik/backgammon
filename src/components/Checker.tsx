import {useState} from 'react';
import classNames from 'classnames';

import {Checker as CheckerClass} from '@/store/Checker';

interface CheckerProps {
  checker: CheckerClass;
  isOnTop?: boolean;
  className?: string;
  style?: React.CSSProperties;
  setDragging?: (checker: CheckerClass | undefined) => void;
}

export const Checker: React.FC<CheckerProps> = ({
  checker,
  isOnTop = false,
  className,
  style,
  setDragging: setDraggingChecker,
}) => {
  const {color, canMove} = checker;
  const [dragging, setDragging] = useState(false);

  const classes = classNames(
    'checker',
    color === 'red' ? 'checker-red' : 'checker-blue',
    dragging && 'grabbable',
    isOnTop && canMove && 'cursor-grab',
    className
  );
  return (
    <div
      style={style}
      className={classes}
      draggable={isOnTop && canMove}
      onDragStart={() => {
        setDragging(true);
        setDraggingChecker?.(checker);
      }}
      onDragEnd={() => {
        setDragging(false);
        setDraggingChecker?.(undefined);
      }}
    />
  );
};

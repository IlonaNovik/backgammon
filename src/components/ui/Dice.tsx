interface DiceProps {
  roll?: 1 | 2 | 3 | 4 | 5 | 6;
}

export const Dice: React.FC<DiceProps> = ({roll}) => {
  return (
    <div className="dice">
      <ol className="dice-list" data-roll={roll ?? 1} id="dice-1">
        <li className="dice-item" data-side="1">
          <span className="dot" />
        </li>
        <li className="dice-item" data-side="2">
          <span className="dot" />
          <span className="dot" />
        </li>
        <li className="dice-item" data-side="3">
          <span className="dot" />
          <span className="dot" />
          <span className="dot" />
        </li>
        <li className="dice-item" data-side="4">
          <span className="dot" />
          <span className="dot" />
          <span className="dot" />
          <span className="dot" />
        </li>
        <li className="dice-item" data-side="5">
          <span className="dot" />
          <span className="dot" />
          <span className="dot" />
          <span className="dot" />
          <span className="dot" />
        </li>
        <li className="dice-item" data-side="6">
          <span className="dot" />
          <span className="dot" />
          <span className="dot" />
          <span className="dot" />
          <span className="dot" />
          <span className="dot" />
        </li>
      </ol>
    </div>
  );
};

import classNames from 'classnames';

export const GameBoard: React.FC = () => {
  return (
    <div className="flex">
      <div className="flex">
        <div className="board">
          <div className="top-left">
            {[...Array(6).keys()].map((item) => (
              <div id={`top-left-${item}`} key={item} className="triangle triangle-top" />
            ))}
          </div>
          <div className="bottom-left">
            {[...Array(6).keys()].map((item) => (
              <div id={`bottom-left-${item}`} key={item} className="triangle triangle-bottom" />
            ))}
          </div>
        </div>
        <div className="board">
          <div className="top-right">
            {[...Array(6).keys()].map((item) => (
              <div id={`top-right-${item}`} key={item} className="triangle triangle-top" />
            ))}
          </div>
          <div className="bottom-right">
            {[...Array(6).keys()].map((item) => (
              <div id={`bottom-right-${item}`} key={item} className="triangle triangle-bottom" />
            ))}
          </div>
        </div>
      </div>
      <div className="board border-l-0 w-24 flex flex-col justify-between">
        <div>
          {[...Array(15).keys()].map((item) => (
            <div key={item} className="h-4 border-b-2 border-black bg-blue" />
          ))}
        </div>
        <div>
          {[...Array(15).keys()].map((item) => (
            <div key={item} className="h-4 border-t-2 border-black bg-red" />
          ))}
        </div>
      </div>
    </div>
  );
};

import classNames from 'classnames';

interface CheckerProps {
  type: 'red' | 'blue';
}

export const Checker: React.FC<CheckerProps> = ({type = 'red'}) => {
  return <div className={classNames('checker', type === 'red' ? 'checker-red' : 'checker-blue')} />;
};

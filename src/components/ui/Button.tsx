import {ButtonHTMLAttributes} from 'react';
import classNames from 'classnames';

type HTMLButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'>;

interface ButtonProps extends HTMLButtonProps {
  type: 'blue' | 'red';
  htmlType?: 'button' | 'submit' | 'reset';
}

export const Button: React.FC<ButtonProps> = ({children, onClick, className, disabled, type, htmlType, ...props}) => {
  return (
    <button
      className={classNames(
        'text-white font-bold py-2 px-4 rounded',
        type === 'blue' ? 'bg-blue' : 'bg-red',
        className
      )}
      onClick={onClick}
      disabled={disabled}
      type={htmlType}
      {...props}
    >
      {children}
    </button>
  );
};

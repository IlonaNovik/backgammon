import {ButtonHTMLAttributes} from 'react';
import classNames from 'classnames';

type HTMLButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'>;

interface ButtonProps extends HTMLButtonProps {
  type: 'blue' | 'red';
  htmlType?: 'button' | 'submit' | 'reset';
  outlined?: boolean;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className,
  disabled,
  type,
  htmlType,
  outlined,
  icon,
  ...props
}) => {
  const buttonClasses = classNames(
    'button',
    !outlined && type === 'blue' && 'button-blue',
    !outlined && type === 'red' && 'button-red',
    outlined && type === 'blue' && 'button-blue-outline',
    outlined && type === 'red' && 'button-red-outline',
    className
  );

  return (
    <button className={buttonClasses} onClick={onClick} disabled={disabled} type={htmlType} {...props}>
      {icon}
      {children}
    </button>
  );
};

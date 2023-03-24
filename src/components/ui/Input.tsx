import React from 'react';
import {FieldError, Merge} from 'react-hook-form';
import classNames from 'classnames';

import {getErrorMessage} from '@/helpers/utils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: Merge<FieldError, (FieldError | undefined)[]> | undefined;
  className?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({label, error, className, required, ...props}, ref) => {
    const errorMessage = error && getErrorMessage(error, label);

    return (
      <div className={classNames('form-item', className)}>
        {label && (
          <label htmlFor={props.name} className={classNames('mb-2', required && 'label-required')}>
            {label}
          </label>
        )}
        <input
          ref={ref}
          {...props}
          className="bg-transparent border-b border-gray-600 text-gray-900 placeholder-yellow-dark focus:outline-none"
        />
        <span className="antd-input-error-message">{errorMessage}</span>
      </div>
    );
  }
);

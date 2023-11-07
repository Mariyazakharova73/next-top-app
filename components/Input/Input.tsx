import React, { forwardRef, type ForwardedRef } from 'react';
import cn from 'classnames';
import s from './Input.module.css';
import { InputProps } from './Input.props';

const Input = forwardRef(
  ({ className, error, ...props }: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
    return (
      <div className={cn(className, s.inputWrapper)}>
        <input
          className={cn(s.input, {
            [s.error]: error
          })}
          {...props}
          ref={ref}
        />
        {error && <span className={s.errorMessage}>{error.message}</span>}
      </div>
    );
  }
);

export default Input;

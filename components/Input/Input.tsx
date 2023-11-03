import React, { forwardRef, type ForwardedRef } from 'react';
import cn from 'classnames';
import s from './Input.module.css';
import { InputProps } from './Input.props';

const Input = forwardRef(
  ({ className, ...props }: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
    return <input className={cn(className, s.input)} {...props} ref={ref} />;
  }
);

export default Input;

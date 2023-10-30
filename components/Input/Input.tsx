import React, { type FC } from 'react';
import cn from 'classnames';
import s from './Input.module.css';
import { InputProps } from './Input.props';

const Input: FC<InputProps> = ({ children, className, ...props }) => {
  return (
    <input className={cn(className, s.input)} {...props}/>
  )
}

export default Input;
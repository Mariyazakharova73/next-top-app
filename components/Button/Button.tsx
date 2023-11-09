import React, { type FC } from 'react';
import cn from 'classnames';
import s from './Button.module.css';
import { ButtonProps } from './Button.props';
import ArrowIcon from './arrow.svg';
import { motion } from 'framer-motion'

const Button: FC<ButtonProps> = ({ children, variant, className, arrow = 'none', ...props }) => {

  return (
    <motion.button
      whileHover={{scale: 1.05}}
      className={cn(s.button, className, {
        [s.primary]: variant === 'primary',
        [s.outlined]: variant === 'outlined'
      })}
      {...props}
    >
      {children}
      {arrow !== 'none' && (
        <span
          className={cn(s.arrow, {
            [s.down]: arrow === 'down'
          })}
        >
          <ArrowIcon/>
        </span>
      )}
    </motion.button>
  );
};

export default Button;

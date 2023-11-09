import React, { type FC } from 'react';
import cn from 'classnames';
import s from './IconButton.module.css';
import { IconButtonProps, icons } from './IconButton.props';

const IconButton: FC<IconButtonProps> = ({ className, icon, variant, ...props }) => {
  const IconComp = icons[icon];
  return (
    <button
      className={cn(s.button, className, {
        [s.primary]: variant === 'primary',
        [s.white]: variant === 'white'
      })}
      {...props}
    >
      <IconComp />
    </button>
  );
};

export default IconButton;

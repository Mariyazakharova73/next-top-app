import React, { ForwardedRef, forwardRef } from 'react';
import cn from 'classnames';
import s from './Card.module.css';
import { CardProps } from './Card.props';

const Card = forwardRef(
  (
    { color = 'white', children, className, ...props }: CardProps,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <div
        ref={ref}
        className={cn(className, s.card, {
          [s.blue]: color === 'blue'
        })}
        {...props}
      >
        {children}
      </div>
    );
  }
);

export default Card;

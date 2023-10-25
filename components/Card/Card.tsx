import React, { type FC } from 'react';
import cn from 'classnames';
import s from './Card.module.css';
import { CardProps } from './Card.props';

const Card: FC<CardProps> = ({ color='white', children, className, ...props }) => {
  return (
    <div className={cn(className, s.card, {
      [s.blue]: color ==='blue',
    })} {...props}>{children}</div>
  )
}

export default Card;
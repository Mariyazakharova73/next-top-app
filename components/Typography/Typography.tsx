import React, { type FC } from 'react';
import cn from 'classnames';
import s from './Typography.module.css';
import { TypographyProps } from './Typography.props';

const Typography: FC<TypographyProps> = ({ size = 'm', children, className, ...props }) => {
  return (
    <p
      className={cn(s.text, className, {
        [s.smal]: size === 's',
        [s.medium]: size === 'm',
        [s.large]: size === 'l'
      })}
      {...props}
    >
      {children}
    </p>
  );
};

export default Typography;

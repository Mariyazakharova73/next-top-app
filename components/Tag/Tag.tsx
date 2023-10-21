import React, { type FC } from 'react';
import cn from 'classnames';
import s from './Tag.module.css';
import { TagProps } from './Tag.props';

const Tag: FC<TagProps> = ({
  size = 's',
  color = 'ghost',
  className,
  children,
  href,
  ...props
}) => {
  return (
    <div
      className={cn(s.tag, className, {
        [s.small]: size === 's',
        [s.medium]: size === 'm',
        [s.ghost]: color === 'ghost',
        [s.red]: color === 'red',
        [s.gray]: color === 'gray',
        [s.green]: color === 'green',
        [s.primary]: color === 'primary'
      })}
      {...props}
    >
      {href ? <a href={href}>{children}</a> : children}
    </div>
  );
};

export default Tag;

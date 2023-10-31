import React, { type FC } from 'react';
import cn from 'classnames';
import s from './Divider.module.css';
import { DividerProps } from './Divider.props';

const Divider: FC<DividerProps> = ({ className, ...props }) => {
  return <hr className={cn(className, s.hr)} {...props}/>;
};

export default Divider;

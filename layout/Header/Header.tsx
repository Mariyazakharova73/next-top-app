import React, { type FC } from 'react';
import cn from 'classnames';
import s from './Header.module.css';
import { HeaderProps } from './Header.props';

const Header: FC<HeaderProps> = ({ ...props }) => {
  return <div {...props}>Header</div>;
};

export default Header;

import React, { type FC } from 'react';
import cn from 'classnames';
import s from './Sidebar.module.css';
import { SidebarProps } from './Sidebar.props';
import Menu from '../Menu/Menu';
import Logo from '../logo.svg';

const Sidebar: FC<SidebarProps> = ({className, ...props }) => {
  return <div className={cn(className, s.sidebar)} {...props}>
    <Logo className={s.logo}/>
    <div>poisk</div>
    <Menu/>
    </div>;
};

export default Sidebar;

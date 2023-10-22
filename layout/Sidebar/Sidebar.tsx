import React, { type FC } from 'react';
import cn from 'classnames';
import s from './Sidebar.module.css';
import { SidebarProps } from './Sidebar.props';
import Menu from '../Menu/Menu';

const Sidebar: FC<SidebarProps> = ({ ...props }) => {
  return <div {...props}><Menu/></div>;
};

export default Sidebar;

import React, { type FC } from 'react';
import cn from 'classnames';
import s from './Sidebar.module.css';
import { SidebarProps } from './Sidebar.props';

const Sidebar: FC<SidebarProps> = ({ ...props }) => {
  return <div {...props}>Sidebar</div>;
};

export default Sidebar;

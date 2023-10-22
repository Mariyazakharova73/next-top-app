import React, { useContext, type FC } from 'react';
import cn from 'classnames';
import s from './Menu.module.css';
import { AppContext } from '@/context/app.context';

const Menu = () => {
  const { menu, changeMenu, firstCategory } = useContext(AppContext);

  return (
    <div>
      <ul>
        {menu.map((m) => (
          <li key={m._id.secondCategory}>{m._id.secondCategory}</li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;

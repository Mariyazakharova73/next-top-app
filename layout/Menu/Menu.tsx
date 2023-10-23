import React, { useContext } from 'react';
import cn from 'classnames';
import s from './Menu.module.css';
import { AppContext } from '@/context/app.context';
import { FirstLevelMenuItem, PageItem } from '@/interfaces/menu.interface';
import Link from 'next/link';
import { useRouter } from 'next/router';



const Menu = () => {
  const { menu, changeMenu, firstCategory } = useContext(AppContext);
  const router = useRouter();

  console.log(menu);

  const openSecondLevel = (secondCategory: string) => {
    changeMenu &&
      changeMenu(
        menu.map((m) => {
          if (m._id.secondCategory === secondCategory) {
            m.isOpened = !m.isOpened
          }
          return m;
        })
      );
  };

  const buildFirstLevel = () => {
    return (
      <>
        {firstLevelMenu.map((menuItem) => (
          <div key={menuItem.route}>
            <Link href={`/${menuItem.route}`}>
              <div
                className={cn(s.firstLevel, {
                  [s.firstLevelActive]: menuItem.id === firstCategory
                })}
              >
                {menuItem.icon}
                <span>{menuItem.name}</span>
              </div>
            </Link>
            {menuItem.id === firstCategory && buildSecondLevel(menuItem)}
          </div>
        ))}
      </>
    );
  };

  const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
    return (
      <div className={s.secondLevelWrapper}>
        {menu.slice(0, 5).map((m) => {
          if (m.pages.map((p) => p.alias).includes(router.asPath.split('/')[2])) {
            m.isOpened = true;
          }
          return (
            <div key={m._id.secondCategory}>
              <div
                className={s.secondLevelTitle}
                onClick={() => {
                  openSecondLevel(m._id.secondCategory);
                }}
              >
                {m._id.secondCategory}
              </div>
              <div
                className={cn(s.secondLevelBlock, {
                  [s.secondLevelBlockOpened]: m.isOpened
                })}
              >
                {buildThirdLevel(m.pages, menuItem.route)}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  const buildThirdLevel = (pages: PageItem[], route: string) => {
    return pages.slice(0, 3).map((p) => (
      <Link
        className={cn(s.thirdLevel, {
          [s.thirdLevelActive]: `/${route}/${p.alias}` === router.asPath
        })}
        href={`/${route}/${p.alias}`}
        key={p._id}
      >
        {p.category}
      </Link>
    ));
  };

  return <div className={s.menu}>{buildFirstLevel()}</div>;
};

export default Menu;

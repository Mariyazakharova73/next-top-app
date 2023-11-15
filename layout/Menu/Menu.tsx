import React, { useContext } from 'react';
import cn from 'classnames';
import s from './Menu.module.css';
import { AppContext } from '@/context/app.context';
import { FirstLevelMenuItem, PageItem } from '@/interfaces/menu.interface';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { firstLevelMenu } from '@/helpers/helpers';
import { motion } from 'framer-motion';

const Menu = () => {
  const { menu, changeMenu, firstCategory } = useContext(AppContext);
  const router = useRouter();
  
  const variants = {
    visible: {
      marginBottom: 20,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.1
      }
    },
    hidden: {
      marginBottom: 0
    }
  };

  const childrenVariants = {
    visible: {
      opacity: 1,
      height: 29
    },
    hidden: {
      opacity: 0,
      height: 0
    }
  };

  const openSecondLevel = (secondCategory: string) => {
    changeMenu &&
      changeMenu(
        menu.map((m) => {
          if (m._id.secondCategory === secondCategory) {
            m.isOpened = !m.isOpened;
          }
          return m;
        })
      );
  };

  const openSecondLevelKey = (key: KeyboardEvent, secondCategory: string) => {
    if (key.code === 'Space' || key.code === 'Enter') {
      key.preventDefault();
      openSecondLevel(secondCategory);
    }
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
                tabIndex={0}
                onKeyDown={(key: KeyboardEvent) => openSecondLevelKey(key, m._id.secondCategory)}
                className={s.secondLevelTitle}
                onClick={() => {
                  openSecondLevel(m._id.secondCategory);
                }}
              >
                {m._id.secondCategory}
              </div>
              <motion.div
                variants={variants}
                layout
                initial={'hidden'}
                animate={m.isOpened ? 'visible' : 'hidden'}
                className={cn(s.secondLevelBlock, {
                  [s.secondLevelBlockOpened]: m.isOpened
                })}
              >
                {buildThirdLevel(m.pages, menuItem.route, m.isOpened ??false)}
              </motion.div>
            </div>
          );
        })}
      </div>
    );
  };

  const buildThirdLevel = (pages: PageItem[], route: string, isOpened: boolean) => {
    return pages.slice(0, 3).map((p) => (
      <motion.div key={p._id} variants={childrenVariants}>
        <Link
          tabIndex={isOpened ? 0 : -1}
          className={cn(s.thirdLevel, {
            [s.thirdLevelActive]: `/${route}/${p.alias}` === router.asPath
          })}
          href={`/${route}/${p.alias}`}
        >
          {p.category}
        </Link>
      </motion.div>
    ));
  };

  return <nav role='navigation' className={s.menu}>{buildFirstLevel()}</nav>;
};

export default Menu;

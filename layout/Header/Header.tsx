import React, { useEffect, useState, type FC } from 'react';
import cn from 'classnames';
import s from './Header.module.css';
import { HeaderProps } from './Header.props';
import Logo from '../logo.svg';
import { motion } from 'framer-motion';
import Sidebar from '@/layout/Sidebar/Sidebar';
import IconButton from '@/components/IconButton/IconButton';
import { useRouter } from 'next/router';

const Header: FC<HeaderProps> = ({ className, ...props }) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    setIsOpened(false);
  }, [router]);

  const variants = {
    opened: {
      opacity: 1,
      x: 0,
      transition: {
        stiffness: 20
      }
    },
    closed: {
      opacity: 0,
      x: '100%'
    }
  };

  return (
    <header className={cn(className, s.header)} {...props}>
      <Logo />
      <IconButton variant='white' icon='menu' onClick={() => setIsOpened(true)} />

      <motion.div
        className={s.mobileMenu}
        variants={variants}
        initial={'closed'}
        animate={isOpened ? 'opened' : 'closed'}
      >
        <Sidebar />
        <IconButton
          className={s.menuClose}
          variant='white'
          icon='close'
          onClick={() => setIsOpened(false)}
        />
      </motion.div>
    </header>
  );
};

export default Header;

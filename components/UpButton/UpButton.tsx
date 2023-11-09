import React, { useEffect, type FC } from 'react';
import cn from 'classnames';
import s from './UpButton.module.css';
import UpIcon from './up.svg';
import { useScrollY } from '@/hooks/useScrollY';
import { useAnimation } from 'framer-motion';
import { motion } from 'framer-motion';
import IconButton from './../IconButton/IconButton';

const UpButton = () => {
  const y = useScrollY();

  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: y / document.body.scrollHeight });
  }, [controls, y]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <motion.div
      className={s.up}
      onClick={scrollToTop}
      animate={controls}
      initial={{ opacity: 0 }}
    >
      <IconButton variant='primary' icon='up' onClick={scrollToTop}/>
    </motion.div>
  );
};

export default UpButton;

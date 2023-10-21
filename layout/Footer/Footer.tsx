import React, { type FC } from 'react';
import cn from 'classnames';
import s from './Footer.module.css';
import { format } from 'date-fns'
import { FooterProps } from './Footer.props';

const Footer: FC<FooterProps> = ({ className, ...props }) => {
  return (
    <footer {...props} className={cn(className, s.footer)}>
      <p>NextTopApp © {format(new Date(), 'yyyy')} Все права защищены</p>
      <a className={s.link} href='#' target='_blank'>Пользовательское соглашение</a>
      <a className={s.link} href='#' target='_blank'>Политика конфиденциальности</a>
    </footer>
  );
};

export default Footer;

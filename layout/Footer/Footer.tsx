import React, { type FC } from 'react';
import cn from 'classnames';
import s from './Footer.module.css';
import { FooterProps } from './Footer.props';

const Footer: FC<FooterProps> = ({ className, ...props }) => {
  return (
    <footer {...props} className={cn(className, s.wrapper)}>
      <p>1</p>
      <p>2</p>
      <p>3</p>
    </footer>
  );
};

export default Footer;

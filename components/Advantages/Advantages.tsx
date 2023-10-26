import React, { type FC } from 'react';
import cn from 'classnames';
import s from './Advantages.module.css';
import { AdvantagesProps } from './Advantages.props';
import Htag from '../Htag/Htag';
import MarkIcon from './mark.svg';
import Typography from '@/components/Typography/Typography';

const Advantages: FC<AdvantagesProps> = ({ advantages }) => {
  return (
    <>
      <Htag tag='h2'>Преимущества</Htag>
      {advantages.map((item) => {
        return (
          <div key={item._id} className={s.titleWrapper}>
            <MarkIcon />
            <p className={s.title}>{item.title}</p>
            <hr className={s.vline}/>
            <Typography className={s.description} size='l'>{item.description}</Typography>
          </div>
        );
      })}
    </>
  );
};

export default Advantages;

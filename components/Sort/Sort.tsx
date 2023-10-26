import React, { type FC } from 'react';
import cn from 'classnames';
import s from './Sort.module.css';
import { SortEnum, SortProps } from './Sort.props';
import SortIcon from './sort.svg';

const Sort: FC<SortProps> = ({ sort, setSort, className, ...props }) => {
  return (
    <div className={cn(s.sort, className)} {...props}>
      <span
        className={cn({ [s.active]: sort === SortEnum.Rating })}
        onClick={() => setSort(SortEnum.Rating)}
      >
        <SortIcon className={s.sortIcon} />
        По рейтингу
      </span>
      <span
        className={cn({ [s.active]: sort === SortEnum.Price })}
        onClick={() => setSort(SortEnum.Price)}
      >
        <SortIcon className={s.sortIcon} />
        По цене
      </span>
    </div>
  );
};

export default Sort;

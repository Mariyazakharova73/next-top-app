import React, { type FC } from 'react';
import cn from 'classnames';
import s from './Sort.module.css';
import { SortEnum, SortProps } from './Sort.props';
import SortIcon from './sort.svg';

const Sort: FC<SortProps> = ({ sort, setSort, className, ...props }) => {
  
  return (
    <div className={cn(s.sort, className)} {...props} >
      <div id="sort" className={s.sortName}>Сортировка</div>
      <button
      id="rating"
        className={cn({ [s.active]: sort === SortEnum.Rating })}
        onClick={() => setSort(SortEnum.Rating)}
        aria-selected={sort === SortEnum.Rating}
        aria-labelledby='sort rating'
      >
        <SortIcon className={s.sortIcon} />
        По рейтингу
      </button>
      <button
      id="price"
        className={cn({ [s.active]: sort === SortEnum.Price })}
        onClick={() => setSort(SortEnum.Price)}
        aria-selected={sort === SortEnum.Price}
        aria-labelledby='sort price'
      >
        <SortIcon className={s.sortIcon} />
        По цене
      </button>
    </div>
  );
};

export default Sort;

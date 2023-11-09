import React, { useEffect, useReducer, type FC } from 'react';
import s from './TopPageComponent.module.css';
import { TopPageComponentProps } from './TopPageComponent.props';
import Htag from '@/components/Htag/Htag';
import Tag from '@/components/Tag/Tag';
import HhData from '@/components/HhData/HhData';
import { TopLevelCategory } from '@/interfaces/page.interface';
import Advantages from '@/components/Advantages/Advantages';
import Sort from '@/components/Sort/Sort';
import { SortEnum } from '@/components/Sort/Sort.props';
import { sortReducer } from './sort.reducer';
import Product from '@/components/Product/Product';
import { useScrollY } from '@/hooks/useScrollY';

const TopPageComponent: FC<TopPageComponentProps> = ({ page, products, firstCategory }) => {
  const [{ products: sortProducts, sort }, dispatchSort] = useReducer(sortReducer, {
    products,
    sort: SortEnum.Rating
  });

  const positioY = useScrollY()

  const setSort = (sort: SortEnum) => {
    dispatchSort({ type: sort });
  };

  useEffect(() => {
    dispatchSort({type: 'reset', initialState: products})
  }, [products])

  return (
    <div className={s.wrapper}>
      {positioY}
      <div className={s.title}>
        <Htag tag='h1'>{page.title}</Htag>
        {products && (
          <Tag color='gray' size='m'>
            {page.title.length}
          </Tag>
        )}
        <Sort sort={sort} setSort={setSort} />
      </div>
      <div>{sortProducts && sortProducts.map((p) => <Product layout key={p._id} product={p} />)}</div>
      <div className={s.hhTitle}>
        <Htag tag='h2'>Вакансии - {page.category}</Htag>
        {products && (
          <Tag color='red' size='m'>
            hh.ru
          </Tag>
        )}
      </div>
      {firstCategory === TopLevelCategory.Courses && page.hh && <HhData {...page.hh} />}
      {page.advantages && page.advantages.length > 0 && <Advantages advantages={page.advantages} />}

      {page.seoText && <div className={s.seo} dangerouslySetInnerHTML={{ __html: page.seoText }} />}
      <Htag tag='h2'>Получаемые навыки</Htag>
      {page.tags.map((t) => (
        <Tag key={t} color='primary'>
          {t}
        </Tag>
      ))}
    </div>
  );
};

export default TopPageComponent;

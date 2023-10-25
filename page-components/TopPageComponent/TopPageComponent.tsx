import React, { type FC } from 'react';
import cn from 'classnames';
import s from './TopPageComponent.module.css';
import { TopPageComponentProps } from './TopPageComponent.props';
import Htag from '@/components/Htag/Htag';
import Tag from '@/components/Tag/Tag';
import Card from '@/components/Card/Card';
import HhData from '@/components/HhData/HhData';
import { TopLevelCategory } from '@/interfaces/page.interface';

const TopPageComponent: FC<TopPageComponentProps> = ({ page, products, firstCategory }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.title}>
        <Htag tag='h1'>{page.title}</Htag>
        {products && (
          <Tag color='gray' size='m'>
            {page.title.length}
          </Tag>
        )}
      </div>
      <div>{products && products.map((p) => <div key={p._id}>{p.title}</div>)}</div>
      <div className={s.hhTitle}>
        <Htag tag='h2'>Вакансии - {page.category}</Htag>
        {products && (
          <Tag color='red' size='m'>
            hh.ru
          </Tag>
        )}
      </div>
      {firstCategory === TopLevelCategory.Courses && <HhData {...page.hh} />}
    </div>
  );
};

export default TopPageComponent;

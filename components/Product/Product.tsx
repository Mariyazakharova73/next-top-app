import React, { type FC } from 'react';
import cn from 'classnames';
import s from './Product.module.css';
import { ProductProps } from './Product.props';
import Card from '../Card/Card';
import Rating from '../Rating/Rating';
import Tag from '../Tag/Tag';
import Button from '../Button/Button';

const Product: FC<ProductProps> = ({ product, className, ...props }) => {
  return (
    <Card className={s.product}>
      <div className={s.logo}>
        <img src={process.env.NEXT_PUBLIC_DOMAIN + product.image} alt={product.title} />
      </div>
      <div className={s.title}>{product.title}</div>
      <div className={s.price}>{product.price}</div>
      <div className={s.credit}>{product.credit}</div>
      <div className={s.rating}>
        <Rating rating={product.reviewAvg ?? product.initialRating} />
      </div>
      <div className={s.tags}>
        {product.categories.map((c) => (
          <Tag key={c} color='ghost'>
            {c}
          </Tag>
        ))}
      </div>
      <div className={s.priceTitle}>цена</div>
      <div className={s.creditTitle}>кредит</div>
      <div className={s.rateTitle}>{product.reviewCount}отзывов</div>
      <div className={s.hr}>
        <hr />
      </div>
      <div className={s.description}>{product.description}</div>
      <div className={s.feature}>фичи</div>
      <div className={s.advBlock}>
        <div className={s.advantages}>
          <div>Преимущества</div>
          <div>{product.advantages}</div>
        </div>
        <div className={s.disadvantages}>
          <div>Недостатки</div>
          <div>{product.disadvantages}</div>
        </div>
      </div>
      <div className={s.hr}>
        <hr />
      </div>
      <div className={s.actions}>
        <Button variant='primary'>Узнать подробнее</Button>
        <Button variant='outlined' arrow='right'>
          Читать отзывы
        </Button>
      </div>
    </Card>
  );
};

export default Product;

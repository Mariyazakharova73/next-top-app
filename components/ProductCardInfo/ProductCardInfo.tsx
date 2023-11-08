import React, { type FC } from 'react';
import s from './ProductCardInfo.module.css';
import { ProductCardInfoProps } from './ProductCardInfo.props';
import Card from '../Card/Card';
import Rating from '../Rating/Rating';
import Tag from '../Tag/Tag';
import Button from '../Button/Button';
import { declOfNum, priceRu } from '@/helpers/helpers';
import Divider from '../Divider/Divider';
import Image from 'next/image';
import cn from 'classnames';

const ProductCardInfo: FC<ProductCardInfoProps> = ({
  product,
  handleReviewOpened,
  isReviewOpened,
  scrollToReview
}) => {
  return (
    <Card className={s.product}>
      <div className={s.logo}>
        <Image
          src={process.env.NEXT_PUBLIC_DOMAIN + product.image}
          width={70}
          height={70}
          alt={product.title}
        />
      </div>
      <div className={s.title}>{product.title}</div>
      <div className={s.price}>
        {priceRu(product.price)}
        {product.oldPrice && (
          <Tag className={s.oldPrice} color='green'>
            {priceRu(product.price - product.oldPrice)}
          </Tag>
        )}
      </div>
      <div className={s.credit}>
        {priceRu(product.credit)}/<span className={s.month}>мес</span>
      </div>
      <div className={s.rating}>
        <Rating rating={product.reviewAvg ?? product.initialRating} />
      </div>
      <div className={s.tags}>
        {product.categories.map((c) => (
          <Tag className={s.tag} key={c} color='ghost'>
            {c}
          </Tag>
        ))}
      </div>
      <div className={s.priceTitle}>цена</div>
      <div className={s.creditTitle}>кредит</div>
      <div className={s.rateTitle}>
        <a href='#ref' onClick={scrollToReview}>
          {product.reviewCount} {declOfNum(product.reviewCount, ['отзыв', 'отзыва', 'отзывов'])}
        </a>
      </div>
      <Divider className={s.hr} />
      <div className={s.description}>{product.description}</div>
      <div className={s.feature}>
        {product.characteristics.map((c) => (
          <div className={s.characteristics} key={c.name}>
            <span className={s.characteristicsName}>{c.name}</span>
            <span className={s.characteristicsDots}></span>
            <span className={s.characteristicsValue}>{c.value}</span>
          </div>
        ))}
      </div>
      <div className={s.advBlock}>
        {product.advantages && (
          <div className={s.advantages}>
            <div className={s.advTitle}>Преимущества</div>
            <div>{product.advantages}</div>
          </div>
        )}
        {product.disadvantages && (
          <div className={s.disadvantages}>
            <div className={s.advTitle}>Недостатки</div>
            <div>{product.disadvantages}</div>
          </div>
        )}
      </div>
      <Divider className={cn(s.hr, s.hr2)} />
      <div className={s.actions}>
        <Button variant='primary'>Узнать подробнее</Button>
        <Button
          variant='outlined'
          arrow={isReviewOpened ? 'down' : 'right'}
          onClick={handleReviewOpened}
        >
          Читать отзывы
        </Button>
      </div>
    </Card>
  );
};

export default ProductCardInfo;

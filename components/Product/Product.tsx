import React, { Fragment, useState, type FC } from 'react';
import s from './Product.module.css';
import { ProductProps } from './Product.props';
import Card from '../Card/Card';
import cn from 'classnames';
import ProductCardInfo from '../ProductCardInfo/ProductCardInfo';
import Review from '../Review/Review';
import Divider from '../Divider/Divider';
import ReviewForm from '../ReviewForm/ReviewForm';

const Product: FC<ProductProps> = ({ product, className, ...props }) => {
  const [isReviewOpened, setIsReviewOpened] = useState<boolean>(false);

  const handleReviewOpened = () => {
    setIsReviewOpened(!isReviewOpened);
  };

  return (
    <>
      <ProductCardInfo
        product={product}
        handleReviewOpened={handleReviewOpened}
        isReviewOpened={isReviewOpened}
      />
      <Card
        color='blue'
        className={cn(s.reviews, {
          [s.opened]: isReviewOpened,
          [s.closed]: !isReviewOpened
        })}
      >
        {product.reviews.map((r) => (
          <Fragment key={r._id}>
            <Review  review={r} />
            <Divider />
          </Fragment>
        ))}
        <ReviewForm productId={product._id}/>
      </Card>
    </>
  );
};

export default Product;

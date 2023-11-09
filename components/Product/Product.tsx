import React, { forwardRef, Fragment, useRef, useState, type ForwardedRef } from 'react';
import s from './Product.module.css';
import { ProductProps } from './Product.props';
import Card from '../Card/Card';
import cn from 'classnames';
import ProductCardInfo from '../ProductCardInfo/ProductCardInfo';
import Review from '../Review/Review';
import Divider from '../Divider/Divider';
import ReviewForm from '../ReviewForm/ReviewForm';
import { motion } from 'framer-motion';

const Product = motion(
  forwardRef(
    ({ product, className, ...props }: ProductProps, ref: ForwardedRef<HTMLDivElement>) => {
      const [isReviewOpened, setIsReviewOpened] = useState<boolean>(false);
      const reviewRef = useRef<HTMLDivElement>(null);

      const variants = {
        visible: {
          opacity: 1,
          height: "auto"
        },
        hidden: {
          opacity: 0,
          height: 0
        }
      };

      const handleReviewOpened = () => {
        setIsReviewOpened(!isReviewOpened);
      };

      const scrollToReview = () => {
        setIsReviewOpened(true);
        reviewRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      };

      return (
        <div className={cn(className)} {...props} ref={ref}>
          <ProductCardInfo
            product={product}
            handleReviewOpened={handleReviewOpened}
            isReviewOpened={isReviewOpened}
            scrollToReview={scrollToReview}
          />
          <motion.div
          variants={variants}
          layout
          initial={'hidden'}
          animate={isReviewOpened ? 'visible' : 'hidden'}
          className={cn(s.wrapper)}
          >
            <Card
              ref={reviewRef}
              color='blue'
              className={cn(s.reviews)}
            >
              {product.reviews.map((r) => (
                <Fragment key={r._id}>
                  <Review review={r} />
                  <Divider />
                </Fragment>
              ))}
              <ReviewForm productId={product._id} />
            </Card>
          </motion.div>
        </div>
      );
    }
  )
);

export default Product;

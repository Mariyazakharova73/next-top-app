import React, {
  useEffect,
  useState,
  KeyboardEvent,
  forwardRef,
  ForwardedRef,
  Fragment
} from 'react';
import cn from 'classnames';
import s from './Rating.module.css';
import { RatingProps } from './Rating.props';
import StarIcon from './star.svg';

const Rating = forwardRef(
  (
    { isEditable = false, rating, setRating, className, error, ...props }: RatingProps,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

    useEffect(() => {
      constructRating(rating);
    }, [rating]);

    const constructRating = (currentRating: number) => {
      const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
        return (
          <StarIcon
            className={cn(s.star, {
              [s.filled]: i < currentRating,
              [s.editable]: isEditable
            })}
            onMouseEnter={() => changeDisplay(i + 1)}
            onMouseLeave={() => changeDisplay(rating)}
            onClick={() => onClickRating(i + 1)}
            tabIndex={isEditable ? 0 : -1}
            onKeyDown={handleKey}
          />
        );
      });
      setRatingArray(updatedArray);
    };

    const changeDisplay = (i: number) => {
      if (!isEditable) return;
      constructRating(i);
    };

    const onClickRating = (i: number) => {
      if (!isEditable || !setRating) return;
      setRating(i);
    };

    const handleKey = (e: KeyboardEvent<SVGAElement>) => {
      if (!isEditable || !setRating) {
        return;
      }
      if (e.code == 'ArrowRight' || e.code == 'ArrowUp') {
        e.preventDefault();
        setRating(rating + 1);
      }
      if (e.code == 'ArrowLeft' || e.code == 'ArrowDown') {
        e.preventDefault();
        setRating(rating - 1);
      }
    };

    return (
      <div
        className={cn(className, s.ratingWrapper, {
          [s.error]: error
        })}
        {...props}
        ref={ref}
      >
        {ratingArray.map((r, i) => (
          <Fragment key={i}>
            <span>{r}</span>
            {error && <span className={s.errorMessage}>{error.message}</span>}
          </Fragment>
        ))}
      </div>
    );
  }
);

export default Rating;

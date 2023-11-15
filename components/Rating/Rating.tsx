import React, {
  useEffect,
  useState,
  KeyboardEvent,
  forwardRef,
  ForwardedRef,
  Fragment,
  useRef
} from 'react';
import cn from 'classnames';
import s from './Rating.module.css';
import { RatingProps } from './Rating.props';
import StarIcon from './star.svg';

const Rating = forwardRef(
  (
    { isEditable = false, rating, setRating, className, error, tabIndex, ...props }: RatingProps,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));
    const ratingRef = useRef<(HTMLSpanElement | null)[]>([]);

    useEffect(() => {
      constructRating(rating);
    }, [rating, tabIndex]);

    const computeFocus = (rating: number, index: number): number => {
      if (!isEditable) {
        return -1;
      }
      if (!rating && index === 0) {
        return tabIndex ?? 0;
      }
      if (rating === index + 1) {
        return tabIndex ?? 0;
      }
      return -1;
    };

    const constructRating = (currentRating: number) => {
      const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
        return (
          <span
            className={cn(s.star, {
              [s.filled]: i < currentRating,
              [s.editable]: isEditable
            })}
            onMouseEnter={() => changeDisplay(i + 1)}
            onMouseLeave={() => changeDisplay(rating)}
            onClick={() => onClickRating(i + 1)}
            tabIndex={computeFocus(rating, i)}
            onKeyDown={(e: KeyboardEvent) => handleKey(e)}
            ref={(r) => ratingRef.current?.push(r)}
            role={isEditable ? 'slider' : ''}
            aria-label={isEditable ? 'Укажите рейтинг' : 'рейтинг' + rating}
            aria-valuenow={rating}
            aria-valuemax={5}
            aria-valuemin={1}
            aria-invalid={error ? true : false}
          >
            <StarIcon />
          </span>
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

    const handleKey = (e: KeyboardEvent) => {
      if (!isEditable || !setRating) {
        return;
      }

      if (e.code === 'ArrowRight' || e.code === 'ArrowUp') {
        if (!rating) {
          setRating(1);
        } else {
          e.preventDefault();
          setRating(rating < 5 ? rating + 1 : 5);
        }
        ratingRef.current[rating]?.focus();
      }

      if (e.code === 'ArrowLeft' || e.code === 'ArrowDown') {
        if (!rating) {
          setRating(1);
        } else {
          e.preventDefault();
          setRating(rating > 0 ? rating - 1 : 0);
        }
        ratingRef.current[rating - 2]?.focus();
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
            {error && <span role='alert' className={s.errorMessage}>{error.message}</span>}
          </Fragment>
        ))}
      </div>
    );
  }
);

export default Rating;

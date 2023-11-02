import React, { type FC } from 'react';
import cn from 'classnames';
import s from './ReviewForm.module.css';
import { ReviewFormProps } from './ReviewForm.props';
import Input from '../Input/Input';
import Rating from '../Rating/Rating';
import TextArea from '../TextArea/TextArea';
import Button from '../Button/Button';
import CloseIcon from './close.svg'

const ReviewForm: FC<ReviewFormProps> = ({ productId, className, ...props }) => {
  return (
    <>
      <div className={cn(s.reviewForm, className)} {...props}>
        <Input placeholder='Имя'/>
        <Input placeholder='Заголовок отзыва' className={s.title}/>
        <div className={s.rating}>
          <span>Оценка:</span>
          <Rating rating={0} />
        </div>
        <TextArea placeholder='Текст отзыва' className={s.description}/>
        <div className={s.submit}>
          <Button variant='primary'>Отправить</Button>
          <span className={s.info}>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
        </div>
      </div>

      <div className={s.success}>
        <div className={s.successTitle}>Ваш отзыв отправлен</div>
        <div>
          Спасибо, Ваш отзыв будет отправлен после проверки.
        </div>
        <CloseIcon className={s.close}/>
      </div>
    </>
  );
};

export default ReviewForm;

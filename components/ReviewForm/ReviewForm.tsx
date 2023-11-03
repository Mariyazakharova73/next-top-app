import React, { type FC } from 'react';
import cn from 'classnames';
import s from './ReviewForm.module.css';
import { ReviewFormProps } from './ReviewForm.props';
import Input from '../Input/Input';
import Rating from '../Rating/Rating';
import TextArea from '../TextArea/TextArea';
import Button from '../Button/Button';
import CloseIcon from './close.svg';
import { IReviewForm } from './ReviewForm.interface';
import { useForm, Controller } from 'react-hook-form';

const ReviewForm: FC<ReviewFormProps> = ({ productId, className, ...props }) => {
  const { register, control, handleSubmit } = useForm<IReviewForm>();

  const onSubmit = (data: IReviewForm) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={cn(s.reviewForm, className)} {...props}>
        <Input {...register('name')} placeholder='Имя' />
        <Input {...register('title')} className={s.title} placeholder='Заголовок отзыва' />
        <div className={s.rating}>
          <span>Оценка:</span>
          <Controller
            control={control}
            name='rating'
            render={({ field }) => <Rating
            ref={field.ref}
            isEditable 
            rating={field.value} 
            setRating={field.onChange}
            />}
          />
        </div>
        <TextArea
          {...register('description')}
          className={s.description}
          placeholder='Текст отзыва'
        />
        <div className={s.submit}>
          <Button variant='primary'>Отправить</Button>
          <span className={s.info}>
            * Перед публикацией отзыв пройдет предварительную модерацию и проверку
          </span>
        </div>
      </div>

      <div className={s.success}>
        <div className={s.successTitle}>Ваш отзыв отправлен</div>
        <div>Спасибо, Ваш отзыв будет отправлен после проверки.</div>
        <CloseIcon className={s.close} />
      </div>
    </form>
  );
};

export default ReviewForm;

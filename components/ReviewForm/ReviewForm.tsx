import React, { useState, type FC } from 'react';
import cn from 'classnames';
import s from './ReviewForm.module.css';
import { ReviewFormProps } from './ReviewForm.props';
import Input from '../Input/Input';
import Rating from '../Rating/Rating';
import TextArea from '../TextArea/TextArea';
import Button from '../Button/Button';
import CloseIcon from './close.svg';
import { IReviewForm, IReviewSentResponse } from './ReviewForm.interface';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import { API } from '@/helpers/api';

const ReviewForm: FC<ReviewFormProps> = ({ productId, className, ...props }) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<IReviewForm>();

  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (formData: IReviewForm) => {
    try {
      const { data } = await axios.post<IReviewSentResponse>(API.review.createDemo, {
        ...formData,
        productId
      });
      if (data.message) {
        setIsSuccess(true);
        reset();
      } else {
        setError('Что-то пошло не так');
      }
    } catch (e: any) {
      setError(e.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={cn(s.reviewForm, className)} {...props}>
        <Input
          {...register('name', { required: { value: true, message: 'Заполните имя' } })}
          placeholder='Имя'
          error={errors.name}
        />
        <Input
          {...register('title', { required: { value: true, message: 'Заполните заголовок' } })}
          className={s.title}
          placeholder='Заголовок отзыва'
          error={errors.title}
        />
        <div className={s.rating}>
          <span>Оценка:</span>
          <Controller
            control={control}
            name='rating'
            rules={{ required: { value: true, message: 'Укажите рейтинг' } }}
            render={({ field }) => (
              <Rating
                ref={field.ref}
                isEditable
                rating={field.value}
                setRating={field.onChange}
                error={errors.rating}
              />
            )}
          />
        </div>
        <TextArea
          {...register('description', {
            required: { value: true, message: 'Заполните описание' }
          })}
          className={s.description}
          placeholder='Текст отзыва'
          error={errors.description}
        />
        <div className={s.submit}>
          <Button variant='primary'>Отправить</Button>
          <span className={s.info}>
            * Перед публикацией отзыв пройдет предварительную модерацию и проверку
          </span>
        </div>
      </div>

      {isSuccess && (
        <div className={cn(s.panel, s.success)}>
          <div className={s.successTitle}>Ваш отзыв отправлен</div>
          <div>Спасибо, Ваш отзыв будет отправлен после проверки.</div>
          <CloseIcon className={s.close} onClick={()=>{setIsSuccess(false)}}/>
        </div>
      )}

      {error && (
        <div className={cn(s.panel, s.error)}>
          Что-то пошло не так. Попробуйте обновить страницу.
          <CloseIcon className={s.close} onClick={()=>{setError(null)}}/>
        </div>
      )}
    </form>
  );
};

export default ReviewForm;

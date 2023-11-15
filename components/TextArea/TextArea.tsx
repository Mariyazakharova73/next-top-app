import React, { forwardRef, type ForwardedRef } from 'react';
import cn from 'classnames';
import s from './TextArea.module.css';
import { TextAreaProps } from './TextArea.props';

const TextArea = forwardRef(
  ({ className, error, ...props }: TextAreaProps, ref: ForwardedRef<HTMLTextAreaElement>) => {
    return (
      <div className={cn(className, s.textareaWrapper)}>
        <textarea
        role='alert'
          className={cn(s.textarea, {
            [s.error]: error
          })}
          {...props}
          ref={ref}
        />
        {error && <span className={s.errorMessage}>{error.message}</span>}
      </div>
    );
  }
);

export default TextArea;

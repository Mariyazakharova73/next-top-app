import React, { forwardRef, type ForwardedRef } from 'react';
import cn from 'classnames';
import s from './TextArea.module.css';
import { TextAreaProps } from './TextArea.props';

const TextArea = forwardRef(
  ({ className, ...props }: TextAreaProps, ref: ForwardedRef<HTMLTextAreaElement>) => {
    return <textarea className={cn(className, s.textarea)} {...props} ref={ref}/>;
  }
);

export default TextArea;

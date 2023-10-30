import React, { type FC } from 'react';
import cn from 'classnames';
import s from './TextArea.module.css';
import { TextAreaProps } from './TextArea.props';

const TextArea: FC<TextAreaProps> = ({ className, ...props }) => {
  return <textarea className={cn(className, s.textarea)} {...props} />;
};

export default TextArea;

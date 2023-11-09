import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';
export interface ButtonProps
  extends Omit<
    DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
    'onAnimationStart' | 'onDragStart' | 'onDragEnd' | 'onDrag' | 'ref'
  > {
  children: ReactNode;
  variant: 'primary' | 'outlined';
  arrow?: 'right' | 'down' | 'none';
}

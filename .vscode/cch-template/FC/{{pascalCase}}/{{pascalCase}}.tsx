import React, { type FC } from 'react';
import cn from 'classnames';
import s from './{{pascalCase}}.module.css';
import { {{pascalCase}}Props } from './{{pascalCase}}.props';

const {{pascalCase}}: FC<{{pascalCase}}Props> = ({ children, className, ...props }) => {
  return (
    <div className={cn( className, {
      [s.]:  === '',
    })} {...props}>{children}</div>
  )
}

export default {{pascalCase}};
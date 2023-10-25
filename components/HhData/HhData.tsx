import React, { type FC } from 'react';
import cn from 'classnames';
import s from './HhData.module.css';
import { HhDataProps } from './HhData.props';
import Card from '../Card/Card';
import RateIcon from './rate.svg';

const HhData: FC<HhDataProps> = ({ count, juniorSalary, middleSalary, seniorSalary }) => {
  return (
    <div className={s.hh}>
      <Card className={s.count}>
        <p className={s.title}>Всего вакансий</p>
        <p className={s.countValue}>{count}</p>
      </Card>
      <Card className={s.salary}>
        <div>
          <p className={s.title}>Начальный</p>
          <p className={s.salaryValue}>{juniorSalary}</p>
          <div className={s.rate}>
            <RateIcon className={s.filled} />
            <RateIcon />
            <RateIcon />
          </div>
        </div>
        <div>
          <p className={s.title}>Средний</p>
          <p className={s.salaryValue}>{middleSalary}</p>
          <div className={s.rate}>
            <RateIcon className={s.filled} />
            <RateIcon className={s.filled}/>
            <RateIcon />
          </div>
        </div>
        <div>
          <p className={s.title}>Профессионал</p>
          <p className={s.salaryValue}>{seniorSalary}</p>
          <div className={s.rate}>
            <RateIcon className={s.filled} />
            <RateIcon className={s.filled}/>
            <RateIcon className={s.filled}/>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default HhData;

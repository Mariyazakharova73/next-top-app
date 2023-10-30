import React, { ChangeEvent, useState, type FC } from 'react';
import cn from 'classnames';
import s from './Search.module.css';
import { SearchProps } from './Search.props';
import Input from '../Input/Input';
import Button from '../Button/Button';
import SearchIcon from './search.svg';
import { useRouter } from 'next/router';

const Search: FC<SearchProps> = ({ className, ...props }) => {
  const [search, setSearch] = useState('');
  const router = useRouter();

  const handleSerchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const goToSearch = () => {
    router.push({
      pathname: '/search',
      query: {
        q: search
      }
    });
  };

  const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        goToSearch()
      }
    }

  return (
    <div className={cn(className, s.search)} {...props}>
      <Input
        placeholder='Поиск...'
        value={search}
        onChange={handleSerchChange}
        className={s.input}
        onKeyDown={handleKeyDown}
      />
      <Button variant='primary' className={s.button} onClick={goToSearch}>
        <SearchIcon />
      </Button>
    </div>
  );
};

export default Search;

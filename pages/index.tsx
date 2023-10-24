import Button from '@/components/Button/Button';
import Htag from '@/components/Htag/Htag';
import Head from 'next/head';
import Typography from '@/components/Typography/Typography';
import Tag from '@/components/Tag/Tag';
import Rating from '@/components/Rating/Rating';
import { useState } from 'react';
import { withLayout } from './../layout/Layout';
import { GetStaticProps } from 'next';
import axios from 'axios';
import { MenuItem } from '@/interfaces/menu.interface';

export interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 1;
  const { data: menu } = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
    { firstCategory }
  );

  return {
    props: {
      menu: menu,
      firstCategory
    }
  };
};

function Home({ menu }: HomeProps) {
  const [rating, setRating] = useState<number>(4);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500;700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <>
        <Htag tag='h1'>Текст</Htag>
        <Button variant='primary'>Кнопка</Button>
        <Button variant='outlined'>Кнопка</Button>
        <Button variant='outlined' arrow='right'>
          Кнопка
        </Button>
        <Button variant='primary' arrow='down'>
          Кнопка
        </Button>
        <Typography size='s'>Параграф</Typography>
        <Typography size='m'>Параграф</Typography>
        <Typography size='l'>Параграф</Typography>
        <Tag size='s' color='ghost'>
          Tag
        </Tag>
        <Tag size='s' color='red'>
          Tag
        </Tag>
        <Tag size='s' color='green'>
          Tag
        </Tag>
        <Tag size='s' color='primary'>
          Tag
        </Tag>
        <Tag size='m' color='primary'>
          Tag
        </Tag>
        <Rating rating={rating} isEditable setRating={setRating} />
      </>
    </>
  );
}

export default withLayout(Home);

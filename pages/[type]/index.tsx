import { withLayout } from '@/layout/Layout';
import { useContext } from 'react';
import { AppContext } from '@/context/app.context';
import { GetStaticProps, GetStaticPropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring';
import axios from 'axios';
import { MenuItem } from '../../interfaces/menu.interface';

export interface CoursesProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}

function Courses({ menu }: CoursesProps): JSX.Element {

  return <div>test</div>;
}

export default withLayout(Courses);

export const getStaticProps: GetStaticProps = async () => {

  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
    { firstCategory }
  );

  return {
    props: {
      menu,
      firstCategory
    }
  };
};

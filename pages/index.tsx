import { GetStaticProps } from 'next';
import axios from 'axios';
import { MenuItem } from '@/interfaces/menu.interface';
import { withLayout } from '@/layout/Layout';
import { API } from '@/helpers/api';

function Home({ menu, firstCategory }: HomeProps) {
  return <main>Home</main>;
}

export default withLayout(Home);

export interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, { firstCategory });

  return {
    props: {
      menu: menu,
      firstCategory
    }
  };
};

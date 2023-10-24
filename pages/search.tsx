import { withLayout } from '@/layout/Layout';
import { GetStaticProps } from 'next';
import axios from 'axios';
import { MenuItem } from '@/interfaces/menu.interface';

function Search({ menu }: SearchProps) {

  return (
    <div>
      search
    </div>
  );
}

export default withLayout(Search);

export interface SearchProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}

export const getStaticProps: GetStaticProps<SearchProps> = async () => {
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
import { withLayout } from '@/layout/Layout';
import Htag from '@/components/Htag/Htag';

export function Error404() {
  return (
    <>
      <Htag tag='h1'>Ошибка 404</Htag>
    </>
  );
}

export default withLayout(Error404);

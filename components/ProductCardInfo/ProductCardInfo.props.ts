import { ProductModel } from '@/interfaces/product.interface';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ProductCardInfoProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  product: ProductModel;
  handleReviewOpened: () => void;
  isReviewOpened: boolean
}

import { ProductDiscount } from '@global/enums/productDiscount';
import { ProductState } from '@global/enums/productStates';

export interface ExtraProductDetails {
  state: ProductState;
  discount: ProductDiscount;
}

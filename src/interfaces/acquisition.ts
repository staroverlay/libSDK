export type ProductType = 'template';

export interface Acquisition {
  _id: string;
  isGift: boolean;
  gifterProfileId?: string;
  profileId: string;
  productId: string;
  productType: ProductType;
}

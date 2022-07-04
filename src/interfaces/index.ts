export interface ApiItems {
  id: number;
  image: string;
  name: string;
  price: number;
  discount: number;
  priceMember: number;
  priceNonMember: number;
  type: string;
  classification: string;
  size?: string;
  volume?: string;
  rating: number;
  avaliations?: number;
  country: string;
  region: string;
  flag: string;
  sommelierComment: string;
}

export interface Wine {
  wineItem: ApiItems;
}

export interface DataWine {
  data: {wine: string };
}

export interface WineProps {
  winesApi: ApiItems[];
}

export interface HomeProps extends WineProps {
  totalProduct: number;
}

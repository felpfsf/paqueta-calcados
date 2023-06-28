export interface ShoesProps {
  id: string;
  name: string;
  price: Price;
  soldout: boolean;
  image: string;
  description: string;
  sizes: number[];
}

interface Price {
  value: number;
  discount: number;
}

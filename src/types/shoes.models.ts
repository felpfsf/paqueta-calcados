export interface ShoesProps {
  id: string;
  name: string;
  price: Price;
  soldout: boolean;
  image: string;
  description: string;
}

interface Price {
  value: number;
  discount: number;
}

export interface  IProduct {
  id: number;
  name: string;
  shortDescription:string
  description: string;
  price: number;
  sizes: string[];
  colors:string[];
  images: Record<string, string>;
}

// inherit and add some more fields
export interface ICartProduct extends IProduct {
  quantity: number;
  selectedSize: string;
  selectedColor: string;
}
export interface IProduct {
  id: number;
  name: string;
  shortDescription: string
  description: string;
  price: number;
  sizes: string[];
  colors: string[];
  images: Record<string, string>;
}

// inherit and add some more fields
export interface ICartProduct extends IProduct {
  quantity: number;
  selectedSize: string;
  selectedColor: string;
}

export interface ICart {
  id: number;
  name: string;
  price: number;
  quantity: number;
  selectedSize: string;
  selectedColor: string;
}
export interface CartState {
  cartItems: ICart[];
  addToCart: (product: ICart) => void;
  removeFromCart: (id: number) => void;
  cleanCart: () => void
}
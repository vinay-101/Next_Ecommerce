'use client';

import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { CartState } from '@/types/product';

const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      cartItems: [],

      // ADD TO CART
      addToCart: (product) => {
        set((state) => ({
          cartItems: [...state.cartItems, product],
        }));
      },

      // REMOVE FROM CART
      removeFromCart: (id) => {
        set((state) => ({
          cartItems: state.cartItems.filter(
            (item) => item.id !== id
          ),
        }));
      },

      // CLEAN CART
      cleanCart: () => {
        set({ cartItems: [] });
      },
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCartStore;

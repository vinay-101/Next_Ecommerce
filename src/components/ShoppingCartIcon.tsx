"use client"
import useCartStore from "@/store/cart.store";
import { ShoppingCart } from "lucide-react";
import Link from 'next/link'
import React from 'react'

const ShoppingCartIcon = () => {
  const {cartItems} = useCartStore();
  console.log("cartItems", cartItems)
  return (
    <Link href="/cart" className="relative">
      <ShoppingCart className="w-4 h-4 text-gray-600" />
      <span className="absolute -top-3 -right-3 bg-amber-400 text-gray-600 rounded-full w-4 h-4 flex items-center justify-center text-xs font-medium">{cartItems.length}</span>
    </Link>
  )
}

export default ShoppingCartIcon
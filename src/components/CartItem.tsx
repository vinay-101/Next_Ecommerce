import React from 'react'
import Image from 'next/image'
import { ICartProduct } from '@/types/product'
import { Trash2 } from 'lucide-react'

interface CartItemProps {
  item: ICartProduct
  onUpdateQuantity: (id: number, quantity: number) => void
  onRemove: (id: number) => void
}

const CartItem = ({ item, onUpdateQuantity, onRemove }: CartItemProps) => {
  return (
    <div className="flex items-center gap-4 p-4 border-b border-gray-200">
      <div className="w-20 h-20 relative">
        <Image
          src={item.images[item.selectedColor]}
          alt={item.name}
          fill
          className="object-cover rounded-md"
        />
      </div>
      
      <div className="flex-1">
        <h2 className="text-sm font-semibold">{item.name}</h2>
        <p className="text-sm text-gray-500 mt-1">
          Quantity: {item.quantity}
        </p>
        <p className="text-sm text-gray-500">
          Size: {item.selectedSize.toUpperCase()}
        </p>
        <p className="text-sm text-gray-500">
          Color: {item.selectedColor}
        </p>
      </div>
      
      <div className="flex items-center gap-2">
        <button
          onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
          className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
        >
          -
        </button>
        <span className="w-8 text-center">{item.quantity}</span>
        <button
          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
          className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
        >
          +
        </button>
      </div>
      
      <div className="text-right">
        <p className="font-semibold">${item.price}</p>
        <button
          onClick={() => onRemove(item.id)}
          className="text-red-500 hover:text-red-700 mt-2"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}

export default CartItem
"use client"
import { product } from '@/data/productDetails'
import { ShoppingCart, Plus, Minus } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import useCartStore from '@/store/cart.store'

const page = () => {
  const { addToCart } = useCartStore();
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: quantity,
      selectedSize: selectedSize,
      selectedColor: selectedColor
    });
  }

  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  }

  const decrementQuantity = () => {
    setQuantity(prev => prev > 1 ? prev - 1 : 1);
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* IMAGE SECTION */}
        <div className="w-full relative aspect-2/3">
          <Image
            src={product.images[selectedColor]}
            alt={product.name}
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>

        {/* PRODUCT DETAILS SECTION */}
        <div className="flex flex-col space-y-6">
          {/* Product Title */}
          <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
          
          {/* Description */}
          <p className="text-gray-500 ">{product.description}</p>
          
          {/* Price */}
          <div className="text-3xl font-bold text-gray-900">
            ${product.price.toFixed(2)}
          </div>

          {/* Size Selection */}
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-3">Size</h3>
            <div className="flex gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 border rounded-sm text-sm font-sm transition-colors ${
                    selectedSize === size
                      ? 'bg-gray-900 text-white border-gray-900'
                      : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400'
                  }`}
                >
                  {size.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          {/* Color Selection */}
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-3">Color</h3>
            <div className="flex gap-3">
              {product.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  style={{ backgroundColor: color }}
                  className={`w-8 h-8 rounded-full border-2 transition-all ${
                    selectedColor === color
                      ? 'border-gray-900 ring-2 ring-gray-300'
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                  title={color}
                />
              ))}
            </div>
          </div>

          {/* Quantity Selection */}
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-3">Quantity</h3>
            <div className="flex items-center gap-3">
              <button
                onClick={decrementQuantity}
                className="p-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="text-lg font-medium w-12 text-center">{quantity}</span>
              <button
                onClick={incrementQuantity}
                className="p-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <button
              onClick={handleAddToCart}
              className="w-full bg-gray-900 text-white py-3 px-6 rounded-md font-medium hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
            >
              <Plus className="w-5 h-5" />
              Add to Cart
            </button>
            
            <button className="w-full bg-white text-gray-900 py-3 px-6 rounded-md font-medium border border-gray-300 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
              <ShoppingCart className="w-5 h-5" />
              Buy this Item
            </button>
          </div>

          {/* Payment Methods */}
          <div className="flex gap-2 pt-4">
            <Image src="/klarna.png" alt="Klarna" width={60} height={30} className="rounded" />
            <Image src="/stripe.png" alt="Stripe" width={60} height={30} className="rounded" />
          </div>

          {/* Terms */}
          <p className="text-xs text-gray-500 leading-relaxed">
            By clicking Pay Now, you agree to our Terms & Conditions and Privacy Policy. You authorize us to charge your 
            selected payment method for the total amount shown. All sales are subject to our return and Refund Policies.
          </p>
        </div>
      </div>
    </div>
  )
}

export default page
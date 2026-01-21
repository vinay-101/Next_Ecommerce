'use client'

import { ICartProduct } from '@/types/product';
import { useState } from 'react'
import Steps from '@/components/Steps'
import CartItem from '@/components/CartItem'
import ShippingAddress from '@/components/ShippingAddress'
import PaymentMethod from '@/components/PaymentMethod'
import { initialCartItems } from '@/data/cartProduct';
import useCartStore from '@/store/cart.store';


const CartPage = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [cartItems, setCartItems] = useState<ICartProduct[]>(initialCartItems)
  const {removeFromCart} = useCartStore();

  const updateQuantity = (id: number, quantity: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    )
  }

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id))
    removeFromCart(id);
  }

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const discount = subtotal * 0.1 // 10% discount
  const shippingFee = 10
  const total = subtotal - discount + shippingFee

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="max-w-6xl mx-auto p-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <h2 className="text-lg font-semibold mb-4">Cart Items</h2>
                <div className="bg-white rounded-lg shadow-lg border-1 border-gray-100 ">
                  {cartItems.length === 0 ? (
                    <div className="p-8 text-center text-gray-500">
                      Your cart is empty
                    </div>
                  ) : (
                    cartItems.map(item => (
                      <CartItem
                        key={item.id}
                        item={item}
                        onUpdateQuantity={updateQuantity}
                        onRemove={removeItem}
                      />
                    ))
                  )}
                </div>
              </div>

              {/* Cart Summary */}
              <div>
                <h2 className="text-lg font-semibold mb-4">Cart Details</h2>
                <div className="bg-white rounded-lg shadow-lg border-1 border-gray-100 p-6">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-red-600">
                      <span>Discount (10%)</span>
                      <span>-${discount.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Shipping Fee</span>
                      <span>${shippingFee}</span>
                    </div>
                    <hr />
                    <div className="flex justify-between font-semibold text-lg">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => setCurrentStep(2)}
                    className="w-full mt-6 bg-black text-white py-1.5 rounded-md hover:bg-gray-800 transition-colors cursor-pointer"
                    disabled={cartItems.length === 0}
                  >
                    Continue →
                  </button>
                </div>
              </div>
            </div>
          </div>
        )
      case 2:
        return (
          <ShippingAddress 
            onBack={() => setCurrentStep(1)}
            onNext={() => setCurrentStep(3)}
          />
        )
      case 3:
        return (
          <PaymentMethod 
            onBack={() => setCurrentStep(2)}
            onComplete={() => {
              alert('Order placed successfully!')
              setCurrentStep(1)
            }}
            cartItems={cartItems}
            subtotal={subtotal}
            discount={discount}
            shippingFee={shippingFee}
            total={total}
          />
        )
      default:
        return null
    }
  }

  return (
    <div className="max-h-screen">
      <div className="container mx-auto py-10">
        <h1 className="text-2xl font-bold text-center mb-8">Your Shopping Cart</h1>
        
        <Steps currentStep={currentStep} />
        
        {renderStepContent()}
      </div>
    </div>
  )
}

export default CartPage
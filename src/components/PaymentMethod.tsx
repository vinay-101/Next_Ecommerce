'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { paymentSchema, PaymentSchema } from '@/schema/payment.schema';
import { ICartProduct } from '@/types/product';

interface PaymentMethodProps {
  onBack: () => void;
  onComplete: () => void;
  cartItems: ICartProduct[];
  subtotal: number;
  discount: number;
  shippingFee: number;
  total: number;
}

const inputClass =
  'w-full px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent';

const errorText = 'text-sm text-red-500 mt-1';

const PaymentMethod = ({
  onBack,
  onComplete,
  cartItems,
  subtotal,
  discount,
  shippingFee,
  total,
}: PaymentMethodProps) => {
  const [selectedPayment, setSelectedPayment] = useState<
    'card' | 'paypal' | 'stripe' | 'klarna'
  >('card');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<PaymentSchema>({
    resolver: zodResolver(paymentSchema),
  });

  const onSubmit = (data: PaymentSchema) => {
    const payload = {
      paymentMethod: selectedPayment,
      cardDetails: data,
      amount: total,
    };

    console.log('PAYMENT PAYLOAD:', payload);
    onComplete();
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* PAYMENT FORM */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-semibold mb-6">Payment Method</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-4 mb-6">
              {/* CARD */}
              <div className="border border-gray-200 rounded-lg p-4">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    checked={selectedPayment === 'card'}
                    onChange={() => setSelectedPayment('card')}
                    className="mr-3"
                  />
                  <span className="font-medium">Credit / Debit Card</span>
                </label>

                {selectedPayment === 'card' && (
                  <div className="mt-4 space-y-4">
                    {/* Card Number */}
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Card Number
                      </label>
                      <input
                        {...register('cardNumber')}
                        maxLength={16}
                        placeholder="1234567812345678"
                        className={inputClass}
                      />
                      {errors.cardNumber && (
                        <p className={errorText}>
                          {errors.cardNumber.message}
                        </p>
                      )}
                    </div>

                    {/* Expiry + CVV */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">
                          Expiry Date
                        </label>
                        <input
                          {...register('expiryDate')}
                          maxLength={5}
                          placeholder="MM/YY"
                          className={inputClass}
                        />
                        {errors.expiryDate && (
                          <p className={errorText}>
                            {errors.expiryDate.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-1">
                          CVV
                        </label>
                        <input
                          {...register('cvv')}
                          maxLength={3}
                          placeholder="123"
                          className={inputClass}
                        />
                        {errors.cvv && (
                          <p className={errorText}>{errors.cvv.message}</p>
                        )}
                      </div>
                    </div>

                    {/* Name on Card */}
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Name on Card
                      </label>
                      <input
                        {...register('cardName')}
                        placeholder="Enter name as on card"
                        className={inputClass}
                      />
                      {errors.cardName && (
                        <p className={errorText}>
                          {errors.cardName.message}
                        </p>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* OTHER METHODS */}
              {['paypal', 'stripe', 'klarna'].map(method => (
                <div
                  key={method}
                  className="border border-gray-200 rounded-lg p-3"
                >
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      checked={selectedPayment === method}
                      onChange={() =>
                        setSelectedPayment(method as any)
                      }
                      className="mr-3"
                    />
                    <span className="font-medium capitalize">{method}</span>
                  </label>
                </div>
              ))}
            </div>

            {/* ACTIONS */}
            <div className="flex justify-between pt-6">
              <button
                type="button"
                onClick={onBack}
                className="px-6 py-1.5 border border-gray-300 rounded-md hover:bg-gray-50"
              >
                Back to Shipping
              </button>

              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-1.5 bg-black text-white rounded-md hover:bg-gray-800"
              >
                Place Order
              </button>
            </div>
          </form>
        </div>

        {/* ORDER SUMMARY (UNCHANGED) */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-4">
            <div className="p-4 border-b border-gray-200">
              <h3 className="font-medium">Items ({cartItems.length})</h3>
            </div>

            <div className="max-h-60 overflow-y-auto">
              {cartItems.map(item => (
                <div
                  key={item.id}
                  className="flex items-center gap-3 p-4 border-b border-gray-100"
                >
                  <div className="w-12 h-12 relative">
                    <Image
                      src={item.images[item.selectedColor]}
                      alt={item.name}
                      fill
                      className="object-cover rounded"
                    />
                  </div>

                  <div className="flex-1">
                    <p className="text-sm font-medium truncate">
                      {item.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      {item.selectedSize.toUpperCase()} •{' '}
                      {item.selectedColor} • Qty: {item.quantity}
                    </p>
                  </div>

                  <div className="text-sm font-medium">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-red-600">
                <span>Discount</span>
                <span>- ${discount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>${shippingFee}</span>
              </div>
              <hr />
              <div className="flex justify-between font-semibold text-lg">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;

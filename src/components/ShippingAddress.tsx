'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  shippingAddressSchema,
  ShippingAddressSchema,
} from '@/schema/shipping.schema';

interface ShippingAddressProps {
  onBack: () => void;
  onNext: () => void;
}

const ShippingAddress = ({ onBack, onNext }: ShippingAddressProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ShippingAddressSchema>({
    resolver: zodResolver(shippingAddressSchema),
  });

  const onSubmit = (data: ShippingAddressSchema) => {
    console.log('VALID DATA:', data);
    onNext(); // move to payment step
  };

  const errorText = 'text-sm text-red-500 mt-1';

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-6">Shipping Address</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* First + Last Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              First Name
            </label>
            <input
              {...register('firstName')}
              placeholder="Enter first name"
              className="w-full px-3 py-1.5 border border-gray-200 rounded-md"
            />
            {errors.firstName && (
              <p className={errorText}>{errors.firstName.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Last Name
            </label>
            <input
              {...register('lastName')}
              placeholder="Enter last name"
              className="w-full px-3 py-1.5  border border-gray-200 rounded-md"
            />
            {errors.lastName && (
              <p className={errorText}>{errors.lastName.message}</p>
            )}
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Email Address
          </label>
          <input
            {...register('email')}
            placeholder="Enter email address"
            className="w-full px-3 py-1.5  border border-gray-200 rounded-md"
          />
          {errors.email && (
            <p className={errorText}>{errors.email.message}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            maxLength={10}
            {...register('phone')}
            placeholder="Enter phone number"
            className="w-full px-3 py-1.5  border border-gray-200 rounded-md"
          />
          {errors.phone && (
            <p className={errorText}>{errors.phone.message}</p>
          )}
        </div>

        {/* Street Address */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Street Address
          </label>
          <input
            {...register('streetAddress')}
            placeholder="Enter street address"
            className="w-full px-3 py-1.5  border border-gray-200 rounded-md"
          />
          {errors.streetAddress && (
            <p className={errorText}>{errors.streetAddress.message}</p>
          )}
        </div>

        {/* City / State / ZIP */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">City</label>
            <input
              {...register('city')}
              placeholder="Enter city"
              className="w-full px-3 py-1.5  border border-gray-200 rounded-md"
            />
            {errors.city && (
              <p className={errorText}>{errors.city.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">State</label>
            <input
              {...register('state')}
              placeholder="Enter state"
              className="w-full px-3 py-1.5  border border-gray-200 rounded-md"
            />
            {errors.state && (
              <p className={errorText}>{errors.state.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              ZIP Code
            </label>
            <input
              {...register('zipCode')}
              placeholder="Enter ZIP code"
              className="w-full px-3 py-1.5  border border-gray-200 rounded-md"
            />
            {errors.zipCode && (
              <p className={errorText}>{errors.zipCode.message}</p>
            )}
          </div>
        </div>

        {/* Country */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Country
          </label>
          <select
            {...register('country')}
            className="w-full px-3 py-2  border border-gray-200 rounded-md"
          >
            <option value="">Select country</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="UK">United Kingdom</option>
            <option value="IN">India</option>
          </select>
          {errors.country && (
            <p className={errorText}>{errors.country.message}</p>
          )}
        </div>

        {/* Buttons */}
        <div className="flex justify-between pt-6">
          <button
            type="button"
            onClick={onBack}
            className="px-6 py-1.5  border border-gray-200 rounded-md"
          >
            Back to Cart
          </button>

          <button
            type="submit"
            disabled={isSubmitting}
            className="px-6 py-1.5 bg-black text-white rounded-md"
          >
            Continue to Payment
          </button>
        </div>
      </form>
    </div>
  );
};

export default ShippingAddress;

// schemas/shipping-address.schema.ts
import { z } from 'zod';

export const shippingAddressSchema = z.object({
  firstName: z
    .string()
    .min(1, 'First name is required')
    .min(2, 'First name must be at least 2 characters'),

  lastName: z
    .string()
    .min(1, 'Last name is required')
    .min(2, 'Last name must be at least 2 characters'),

  email: z
    .string()
    .min(1, 'Email is required')
    .email('Invalid email address'),

  phone: z
    .string()
    .regex(/^[0-9]{10}$/, 'Phone number must be exactly 10 digits'),

  streetAddress: z
    .string()
    .min(1, 'Street address is required')
    .min(5, 'Street address is too short'),

  city: z
    .string()
    .min(1, 'City is required'),

  state: z
    .string()
    .min(1, 'State is required'),

  zipCode: z
    .string()
    .min(4, 'ZIP code is too short')
    .max(10, 'ZIP code is too long'),

  country: z
    .string()
    .min(1, 'Country is required'),
});

export type ShippingAddressSchema = z.infer<
  typeof shippingAddressSchema
>;

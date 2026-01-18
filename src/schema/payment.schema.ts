// schemas/payment.schema.ts
import { z } from 'zod';

export const paymentSchema = z.object({
  cardNumber: z
    .string()
    .regex(/^[0-9]{16}$/, 'Card number must be 16 digits'),

  expiryDate: z
    .string()
    .regex(/^(0[1-9]|1[0-2])\/\d{2}$/, 'Expiry must be MM/YY'),

  cvv: z
    .string()
    .regex(/^[0-9]{3}$/, 'CVV must be 3 digits'),

  cardName: z
    .string()
    .min(2, 'Name on card is required'),
});

export type PaymentSchema = z.infer<typeof paymentSchema>;

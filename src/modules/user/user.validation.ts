import { z } from 'zod';

export const UserValidationSchema = z.object({
  password: z
    .string({
      invalid_type_error: 'password must be string',
    })
    .max(20, { message: 'Password must be at most 20 characters long' })
    .optional(),
});

export const UserValidation = {
  UserValidationSchema,
};

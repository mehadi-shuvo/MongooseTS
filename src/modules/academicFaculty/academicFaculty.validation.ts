import { z } from 'zod';

export const facultyValidationSchema = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: 'academic must be string',
    }),
  }),
});

export const FacultyValidation = {
  facultyValidationSchema,
};

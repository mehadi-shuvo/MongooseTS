import { z } from 'zod';

export const departmentValidationSchema = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: 'academic department must be string',
      required_error: 'Name is required',
    }),
    academicFaculty: z.string({
      invalid_type_error: 'academic department must be string',
      required_error: 'is required',
    }),
  }),
});

export const DepartmentValidation = { departmentValidationSchema };

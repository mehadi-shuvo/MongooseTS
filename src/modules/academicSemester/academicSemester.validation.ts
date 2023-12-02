import { z } from 'zod';

const TMonth = z.enum([
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]);

const createAcademicSemesterValidationSchema = z.object({
  body: z.object({
    name: z.enum(['autumn', 'summer', 'fall']),
    code: z.enum(['01', '02', '03']),
    year: z.string(),
    startsMonth: TMonth,
    endsMonth: TMonth,
  }),
});

export const academicValidations = {
  createAcademicSemesterValidationSchema,
};

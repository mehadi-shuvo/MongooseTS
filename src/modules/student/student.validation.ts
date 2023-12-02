import { z } from 'zod';

const userNameValidationSchema = z.object({
  firstName: z.string().trim().min(1).max(20),
  middleName: z.string(),
  lastName: z.string(),
});

const createStudentValidationSchema = z.object({
  body: z.object({
    password: z.string().max(20),
    student: z.object({
      name: userNameValidationSchema,
      gender: z.enum(['female', 'male']),
      dateOfBirth: z.string(),
      contactNumber: z.string(),
      emergencyContactNo: z.string(),
      bloodGroup: z.enum(['A+', 'A-', 'O+', 'O-', 'B+', 'B-', 'AB+', 'AB-']),
      Address: z.string(),
      guardian: z.object({
        fatherName: z.string(),
        fatherContactNo: z.string(),
      }),
      email: z.string().email(),
      admissionSemester: z.string(),
      avatar: z.string(),
    }),
  }),
});

export const studentValidations = {
  createStudentValidationSchema,
};

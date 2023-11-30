import Joi from 'joi';

const userNameSchema = Joi.object({
  firstName: Joi.string()
    .trim()
    .min(1)
    .max(20)
    .required()
    .error(new Error('String length must be between 1 and 20 characters')),
  middleName: Joi.string().required(),
  lastName: Joi.string().required(),
});

const studentSchema = Joi.object({
  id: Joi.string().required(),
  password: Joi.string().required(),
  name: userNameSchema.required(),
  gender: Joi.string().valid('female', 'male').required(),
  dateOfBirth: Joi.string().required(),
  contactNumber: Joi.string().required(),
  emergencyContactNo: Joi.string().required(),
  bloodGroup: Joi.string()
    .valid('A+', 'A-', 'O+', 'O-', 'B+', 'B-', 'AB+', 'AB-')
    .required(),
  Address: Joi.string().required(),
  guardian: Joi.object({
    fatherName: Joi.string().required(),
    fatherContactNo: Joi.string().required(),
  }).required(),
  email: Joi.string().email().required(),
  avatar: Joi.string(),
  isDeleted: Joi.boolean(),
});

export { studentSchema };
